import formidable from 'formidable';
import fs from 'fs';
import { google } from 'googleapis';
import path from 'path';
import apikeys from '../../config/google_service_auth.json';

// Define the scope for Google Drive API
const SCOPES = ['https://www.googleapis.com/auth/drive'];

// Get folder ID from environment variables or use default
const DRIVE_FOLDER_ID =
  process.env.GOOGLE_DRIVE_FOLDER_ID || '1fTe3PxYB4dRAnafOPVW68vy9l5H4FsJh';

// Maximum file size (10MB)
const MAX_FILE_SIZE = 10 * 1024 * 1024;

// Allowed file extensions
const ALLOWED_FILE_EXTENSIONS = [
  '.pdf',
  '.doc',
  '.docx',
  '.xls',
  '.xlsx',
  '.ppt',
  '.pptx',
  '.jpg',
  '.jpeg',
  '.png',
  '.gif',
  '.zip',
  '.txt',
];

// Disable the default body parser to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ success: false, error: 'Method not allowed, please use POST' });
  }

  try {
    // Parse the incoming form data with size limits
    const form = new formidable.IncomingForm({
      keepExtensions: true,
      maxFileSize: MAX_FILE_SIZE,
    });

    const [fields, files] = await parseForm(form, req);

    // Check if any files were uploaded
    if (!files.file) {
      return res.status(400).json({
        success: false,
        error: 'Please select a file to upload',
      });
    }

    // Validate file type
    const fileExtension = path
      .extname(files.file.originalFilename || '')
      .toLowerCase();

    if (!ALLOWED_FILE_EXTENSIONS.includes(fileExtension)) {
      return res.status(400).json({
        success: false,
        error:
          'File type not allowed, please upload only: ' +
          ALLOWED_FILE_EXTENSIONS.join(', '),
      });
    }

    // Authenticate with Google
    const authClient = await authorizeGoogleDrive();

    // Upload the file to Google Drive
    const uploadedFile = await uploadFileToDrive(
      authClient,
      files.file.filepath,
      files.file.originalFilename || 'uploaded-file',
      getMimeType(fileExtension),
      DRIVE_FOLDER_ID
    );

    // Return success response
    res.status(200).json({
      success: true,
      file: uploadedFile,
      message: 'File uploaded successfully',
    });
  } catch (error) {
    // Handle specific error types
    if (error.message.includes('maxFileSize exceeded')) {
      return res.status(413).json({
        success: false,
        error: `File too large. Maximum size is ${MAX_FILE_SIZE / (1024 * 1024)}MB`,
      });
    }

    // Log error but don't expose details to client in production
    console.error('Drive upload error:', error);

    res.status(500).json({
      success: false,
      error: 'Internal Server Error',
      // Only include details in development environment
      ...(process.env.NODE_ENV === 'development' && { details: error.message }),
    });
  }
}

/**
 * Parse form data from the request
 */
function parseForm(form, req) {
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      resolve([fields, files]);
    });
  });
}

/**
 * Authorize and get access to Google Drive API
 */
async function authorizeGoogleDrive() {
  const auth = new google.auth.JWT(
    apikeys.client_email,
    null,
    apikeys.private_key,
    SCOPES
  );

  try {
    await auth.authorize();
    return auth;
  } catch (error) {
    throw new Error(`Google Drive authorization failed: ${error.message}`);
  }
}

/**
 * Upload a file to Google Drive
 */
async function uploadFileToDrive(auth, filePath, fileName, mimeType, folderId) {
  const drive = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: fileName,
    parents: [folderId],
  };

  const media = {
    mimeType: mimeType,
    body: fs.createReadStream(filePath),
  };

  try {
    const response = await drive.files.create({
      resource: fileMetadata,
      media: media,
      fields: 'id,name,webViewLink,mimeType,size',
    });

    return {
      id: response.data.id,
      name: response.data.name,
      webViewLink: response.data.webViewLink,
      mimeType: response.data.mimeType,
      size: response.data.size,
    };
  } catch (error) {
    throw new Error(`File upload to Google Drive failed: ${error.message}`);
  }
}

/**
 * Get MIME type from file extension
 */
function getMimeType(extension) {
  const mimeTypes = {
    '.pdf': 'application/pdf',
    '.doc': 'application/msword',
    '.docx':
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    '.xls': 'application/vnd.ms-excel',
    '.xlsx':
      'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    '.ppt': 'application/vnd.ms-powerpoint',
    '.pptx':
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.zip': 'application/zip',
    '.txt': 'text/plain',
  };

  return mimeTypes[extension] || 'application/octet-stream';
}
