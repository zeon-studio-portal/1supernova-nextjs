import Link from 'next/link';

const ArrowButton = ({ link, label, className, ...rest }) => {
  const isExternalLink = link.startsWith('http') || link.startsWith('www');
  return (
    <Link
      href={link}
      {...rest}
      className={
        'group/arrowBtn flex max-w-max items-center gap-x-2 ' + className
      }
      aria-label={label}
      target={isExternalLink ? '_blank' : '_self'}
      rel={isExternalLink ? 'noopener noreferrer' : undefined}>
      <span>{label}</span>
      <div className="relative grid size-6 place-items-center overflow-hidden">
        <i className="grid size-6 place-items-center transition-transform duration-500 ease-out group-hover/arrowBtn:translate-x-full">
          <svg
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.0426 13.2956L14.2926 20.0456C14.0812 20.257 13.7946 20.3757 13.4957 20.3757C13.1968 20.3757 12.9102 20.257 12.6988 20.0456C12.4875 19.8343 12.3688 19.5476 12.3688 19.2487C12.3688 18.9499 12.4875 18.6632 12.6988 18.4519L17.5279 13.6247H3.74664C3.44827 13.6247 3.16213 13.5061 2.95115 13.2952C2.74017 13.0842 2.62164 12.798 2.62164 12.4997C2.62164 12.2013 2.74017 11.9152 2.95115 11.7042C3.16213 11.4932 3.44827 11.3747 3.74664 11.3747H17.5279L12.7007 6.54468C12.4894 6.33333 12.3706 6.04669 12.3706 5.7478C12.3706 5.44891 12.4894 5.16227 12.7007 4.95093C12.912 4.73958 13.1987 4.62085 13.4976 4.62085C13.7965 4.62085 14.0831 4.73958 14.2945 4.95093L21.0445 11.7009C21.1494 11.8056 21.2325 11.9299 21.2892 12.0668C21.346 12.2037 21.375 12.3505 21.3749 12.4987C21.3747 12.6468 21.3453 12.7935 21.2882 12.9303C21.2312 13.0671 21.1477 13.1912 21.0426 13.2956Z"
              fill="currentColor"
            />
          </svg>
        </i>
        <i className="absolute right-full top-0 grid size-6 place-items-center transition-transform duration-500 ease-out group-hover/arrowBtn:translate-x-full">
          <svg
            viewBox="0 0 24 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M21.0426 13.2956L14.2926 20.0456C14.0812 20.257 13.7946 20.3757 13.4957 20.3757C13.1968 20.3757 12.9102 20.257 12.6988 20.0456C12.4875 19.8343 12.3688 19.5476 12.3688 19.2487C12.3688 18.9499 12.4875 18.6632 12.6988 18.4519L17.5279 13.6247H3.74664C3.44827 13.6247 3.16213 13.5061 2.95115 13.2952C2.74017 13.0842 2.62164 12.798 2.62164 12.4997C2.62164 12.2013 2.74017 11.9152 2.95115 11.7042C3.16213 11.4932 3.44827 11.3747 3.74664 11.3747H17.5279L12.7007 6.54468C12.4894 6.33333 12.3706 6.04669 12.3706 5.7478C12.3706 5.44891 12.4894 5.16227 12.7007 4.95093C12.912 4.73958 13.1987 4.62085 13.4976 4.62085C13.7965 4.62085 14.0831 4.73958 14.2945 4.95093L21.0445 11.7009C21.1494 11.8056 21.2325 11.9299 21.2892 12.0668C21.346 12.2037 21.375 12.3505 21.3749 12.4987C21.3747 12.6468 21.3453 12.7935 21.2882 12.9303C21.2312 13.0671 21.1477 13.1912 21.0426 13.2956Z"
              fill="currentColor"
            />
          </svg>
        </i>
      </div>
    </Link>
  );
};

export default ArrowButton;
