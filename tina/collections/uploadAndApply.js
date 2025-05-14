const uploadAndApply = {
  label: 'Upload and Apply Section',
  name: 'uploadAndApply',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'upload-and-apply',
  },
  fields: [
    {
      label: 'Enable',
      name: 'enable',
      type: 'boolean',
    },
    {
      label: 'Background Image',
      name: 'background_image',
      type: 'image',
    },
    {
      label: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      label: 'Form',
      name: 'form',
      type: 'object',
      fields: [
        {
          label: 'Form Action Ajax Url (formsubmit.co)',
          name: 'formActionUrl',
          type: 'string',
        },
        {
          label: 'File Upload Backend Server Endpoint',
          name: 'fileUploadBackendServerEndpoint',
          type: 'string',
        },
        {
          label: 'Success Message',
          name: 'successMessage',
          type: 'string',
        },
        {
          label: 'Error Message',
          name: 'errorMessage',
          type: 'string',
        },
        {
          label: 'Button',
          name: 'button',
          type: 'object',
          fields: [
            {
              label: 'Label',
              name: 'label',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      label: 'Card List',
      name: 'card_list',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'string',
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        },
      },
    },
  ],
};

export default uploadAndApply;
