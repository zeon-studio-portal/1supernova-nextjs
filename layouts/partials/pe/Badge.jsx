import React from 'react';

const Badge = ({ children }) => {
  return (
    <span className="badge-border-gradient mb-3 inline-block rounded-xl px-5 py-2 uppercase">
      {children}
    </span>
  );
};

export default Badge;
