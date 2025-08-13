import React from 'react';
import ImageFallback from './ImageFallback';

const BrandCard = ({ item }) => {
  return (
    <div
      className="border-border flex h-[100px] w-[200px] items-center justify-center border sm:h-[150px] sm:w-[300px] md:h-[180px] md:w-[350px] p-4 sm:p-6 hover:bg-primary-800 hover:border-transparent group hover:flex-col hover:gap-y-5  transition-all duration-300 ">
      <ImageFallback
        src={item.logo}
        alt={item.name}
        className="object-contain max-h-[30px] sm:max-h-[80px] group-hover:sm:max-h-[60px] group-hover:max-h-[30px] group-hover:max-w-[50px] group-hover:sm:max-w-min transition duration-300"
        width={200}
        height={100}
      />
      <a href={item.website} target="_blank" className="hidden group-hover:flex items-center gap-2 sm:border sm:border-border sm:px-4 sm:py-2 text-sm">
        Visit Website
        
        <svg className='size-4' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><path d="M18,21H6a3,3,0,0,1-3-3V6A3,3,0,0,1,6,3h4a1,1,0,0,1,0,2H6A1,1,0,0,0,5,6V18a1,1,0,0,0,1,1H18a1,1,0,0,0,1-1V14a1,1,0,0,1,2,0v4A3,3,0,0,1,18,21Z" fill="#fff"/><path d="M21,4.05v5a1,1,0,0,1-.62.92.84.84,0,0,1-.38.08,1,1,0,0,1-.71-.29L17.45,8l-4.79,4.79a1,1,0,0,1-1.42,0,1,1,0,0,1,0-1.42L16,6.55,14.24,4.76A1,1,0,0,1,14,3.67,1,1,0,0,1,15,3.05h5a.73.73,0,0,1,.25,0,.37.37,0,0,1,.14,0,.94.94,0,0,1,.53.53.37.37,0,0,1,0,.14A.73.73,0,0,1,21,4.05Z" fill="#fff"/></svg>
      </a>
    </div>
  );
};

export default BrandCard;
