import { markdownify } from '@lib/utils/textConverter';

const AnnouncementBar = ({ content }) => {
  return (
    <div className="announcement-bar">
      <div className="container">
        <div className="row">
          <div className="col-12 py-[6px]">
            <svg
              width="20"
              height="18"
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-body mr-2 hidden align-[-3px] sm:inline">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 0H11C15.9706 0 20 4.02944 20 9C20 13.9706 15.9706 18 11 18H4C1.79086 18 0 16.2091 0 14V9C0 4.02944 4.02944 0 9 0ZM10.7918 5.59851C10.6804 5.24163 10.3607 5 10 5C9.6393 5 9.31962 5.24163 9.20816 5.59851L8.64738 7.39403H6.83265C6.47195 7.39403 6.15227 7.63566 6.04081 7.99254C5.92934 8.34942 6.05145 8.74038 6.34326 8.96095L7.81141 10.0706L7.25063 11.8662C7.13917 12.2231 7.26127 12.614 7.55308 12.8346C7.8449 13.0551 8.24004 13.0551 8.53185 12.8346L10 11.7249L11.4681 12.8346C11.76 13.0551 12.1551 13.0551 12.4469 12.8346C12.7387 12.614 12.8608 12.2231 12.7494 11.8662L12.1886 10.0706L13.6567 8.96095C13.9485 8.74038 14.0707 8.34942 13.9592 7.99254C13.8477 7.63566 13.5281 7.39403 13.1674 7.39403H11.3526L10.7918 5.59851Z"
                fill="currentColor"
              />
            </svg>

            {markdownify(content, 'span', 'text-body leading-normal')}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
