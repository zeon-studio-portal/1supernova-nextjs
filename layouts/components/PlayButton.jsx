const PlayButton = ({ onClick }) => (
  <button className="video-play-btn" onClick={onClick} aria-label="Play Video">
    <span className="video-play-btn-icon">
      <svg
        width="26"
        height="26"
        viewBox="0 0 26 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline text-light-primary"
      >
        <path
          d="M18.6278 14.7363L9.49228 19.9566C8.15896 20.7185 6.5 19.7558 6.5 18.2201V12.9998V7.77953C6.5 6.24389 8.15897 5.28115 9.49228 6.04305L18.6278 11.2634C19.9714 12.0311 19.9714 13.9685 18.6278 14.7363Z"
          fill="currentColor"
        />
      </svg>
    </span>
  </button>
);

export default PlayButton;
