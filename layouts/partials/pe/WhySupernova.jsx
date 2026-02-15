import React from 'react';
import SectionHeader from './SectionHeader';
import Card from './Card';
import ImageFallback from '@components/ImageFallback';

const WhySupernova = ({ data }) => {
  return (
    data.enable && (
      <section className="section bg-primary-600">
        <div className="container">
          <SectionHeader data={data} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.list.map(({ icon, title, content }, index) => (
              <div key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                <div className="h-full rounded-2xl bg-dark-quaternary px-6 py-8 hover:border-secondary-600 border border-transparent transition-all duration-300">
                  <ImageFallback
                    src={icon}
                    alt={title}
                    width={48}
                    height={48}
                  />
                  <h3 className="mb-4 mt-6 text-xl font-semibold">{title}</h3>
                  <p className="text-sm">{content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default WhySupernova;
