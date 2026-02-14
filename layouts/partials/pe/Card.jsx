import ImageFallback from '@components/ImageFallback';
import React from 'react';

const Card = ({ data }) => {
  const { icon, title, content } = data;
  
  return (
    <div className="rounded-3xl bg-dark-quaternary px-6 py-8 h-full">
      <ImageFallback src={icon} alt={title} width={48} height={48} />
      <h3 className='mt-6 mb-4 text-2xl font-semibold'>{title}</h3>
      <p className='font-medium'>{content}</p>
    </div>
  );
};

export default Card;
