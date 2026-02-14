import React from 'react';
import Badge from './Badge';
import AnimatedText from '@components/AnimatedText';

const SectionHeader = ({ data }) => {
  const { badge, title, subtitle } = data;
  return (
    <div className="mb-14 flex flex-col items-center justify-center text-center">
      {badge && (
        <div data-aos="fade-up">
          <Badge>{badge}</Badge>
        </div>
      )}
      <div data-aos="fade-up">
        <AnimatedText
          tag="h2"
          className="mb-4 mt-2 font-semibold"
          content={title}
        />
      </div>
      <div data-aos="fade-up">
        <p className="mx-auto sm:w-8/12">{subtitle}</p>
      </div>
    </div>
  );
};

export default SectionHeader;
