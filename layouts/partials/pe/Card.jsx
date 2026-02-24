import ImageFallback from '@components/ImageFallback';
import React from 'react';

const Card = ({ data }) => {
  const { icon, title, content } = data;

  return (
    <div className="h-full rounded-3xl border border-transparent bg-dark-quaternary px-6 py-8 transition-all duration-300 hover:border-secondary-600">
      {icon && <ImageFallback src={icon} alt={title} width={48} height={48} />}

      <h3 className="mb-4 mt-6 text-2xl font-semibold">{title}</h3>
      {content && <p className="font-medium">{content}</p>}
    </div>
  );
};

export default Card;
