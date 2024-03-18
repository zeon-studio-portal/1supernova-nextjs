import { markdownify } from '@lib/utils/textConverter';
import { useState } from 'react';

const Accordion = ({ index, item }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`accordion bg-dark-quaternary ${
        show ? 'border-primary' : 'border-transparent'
      } rounded-2xl border text-light-primary ${index != 0 ? 'mt-4' : ''}`}>
      <button
        className="relative block w-full px-7 py-4 text-left"
        onClick={() => setShow(!show)}>
        {item.question}
        <svg
          className={`absolute right-5 top-1/2 m-0 -translate-y-1/2 text-primary-800 ${
            show && 'rotate-180'
          }`}
          width="20"
          height="16"
          viewBox="0 0 20 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M15.5222 6.6374e-07L3.81964 1.52206e-07C2.27605 8.47342e-08 1.31431 1.67443 2.09208 3.00774L7.94334 13.0385C8.71509 14.3615 10.6267 14.3615 11.3985 13.0385L17.2497 3.00774C18.0275 1.67443 17.0657 7.31212e-07 15.5222 6.6374e-07Z"
            fill="currentColor"
          />
        </svg>
      </button>
      <div className={`px-7 pb-4 text-light-quaternary ${!show && 'hidden'}`}>
        {markdownify(item.answer)}
      </div>
    </div>
  );
};

export default Accordion;
