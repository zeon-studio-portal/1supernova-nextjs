import React from 'react';
import SectionHeader from './SectionHeader';

const NovaProcess = ({ data }) => {
  return (
    <section className="section bg-dark-secondary">
      <div className="container">
        <SectionHeader data={data} />
        <div className="relative grid lg:grid-cols-5 gap-x-4 gap-y-6">
          <div className="bg-gradient-pe absolute top-8 h-px w-10/12 z-0 left-1/2 -translate-x-1/2 hidden lg:block" />
          {data.process_steps.map((step, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="relative flex flex-col items-center justify-center gap-y-6 text-center z-1">
              <div className="flex size-16 items-center justify-center rounded-full border-2 border-secondary-800 font-semibold text-secondary-800 bg-dark-secondary">
                {index + 1}
              </div>
              <h3 className="text-2xl font-semibold">{step.title}</h3>
              <p className="text-sm text-light-tertiary ">{step.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NovaProcess;
