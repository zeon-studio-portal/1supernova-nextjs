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

  return createPortal(
    <div
      ref={refProp}
      {...rest}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-lg">
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
