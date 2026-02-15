import React from 'react';
import SectionHeader from './SectionHeader';
import ImageFallback from '@components/ImageFallback';
import Link from 'next/link';
import ArrowButton from '@components/ArrowButton';

const EngagementModels = ({ data }) => {
  return data.enable && (
    <section className="section" id='engagement-models'>
      <div className="container">
        <SectionHeader data={data} />

        <div className="grid gap-6 lg:grid-cols-3">
          {data.models.map((model, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`relative rounded-xl bg-dark-quaternary p-8 hover:scale-105  ${model.highlight ? 'highlight-model-pe' : 'border border-transparent transition-all duration-300 hover:border-secondary-600'}`}>
              {model.highlight && (
                <div className="bg-gradient-pe absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-xs font-semibold text-dark-primary">
                  Most Popular
                </div>
              )}
              <ImageFallback
                src={model.icon}
                alt={model.title}
                width={48}
                height={48}
                className="mb-4"
              />
              <h3 className="mb-4 text-xl font-normal text-light-primary/80">
                {model.title}
              </h3>
              <h4 className="mb-2 font-semibold text-light-primary">
                {model.price}
              </h4>
              <p className="mb-6 text-sm text-light-primary/60">
                {model.content}
              </p>
              {model.button.enable && (
                <ArrowButton
                  link={model.button.link}
                  label={model.button.label}
                  className={`!max-w-full justify-center rounded-xl border border-secondary-600  px-5 py-3  ${model.highlight ? 'bg-secondary-600 text-dark-primary' : ' text-secondary-600'}  text-base-sm font-medium`}
                />
              )}
              <ul className="mt-6">
                {model.bullet_points.map((item, index) => (
                  <li key={index} className="mb-3 flex gap-3  text-sm">
                    <span className="mt-2 inline-block size-1.5 flex-shrink-0 rounded-full bg-secondary-800"></span>
                    <span className="text-light-secondary/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EngagementModels;
