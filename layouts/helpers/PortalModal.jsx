'use client';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

const PortalModal = ({ children, refProp, ...rest }) => {
  useEffect(() => {
    // Add class to disable scroll
    document.body.classList.add('overflow-hidden');

    // Cleanup function to remove class
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  // create fade in effect
  const fadeInEffect = {
    opacity: 0,
    animation: 'fadeIn 0.5s forwards',

    '@keyframes fadeIn': {
      to: {
        opacity: 1,
      },
    },
  };

  return createPortal(
    <div
      ref={refProp}
      {...rest}
      style={fadeInEffect}
      className="backdrop-blur- fixed inset-0 z-[9999] flex items-center justify-center bg-black/90">
      {children}
    </div>,
    document.body
  );
};

const Close = ({ handleClose }) => (
  <button
    onClick={handleClose}
    className="absolute right-4 top-4 text-2xl text-white">
    &times;
  </button>
);

PortalModal.Close = Close;

export default PortalModal;
