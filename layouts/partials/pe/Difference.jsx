import React from 'react';
import SectionHeader from './SectionHeader';

const Difference = ({ data }) => {
  return (
    data.enable && (
      <section className="section bg-dark-secondary" id='the-difference'>
        <div className="container">
          <SectionHeader data={data} />

          <div
            className="grid gap-1 overflow-hidden  rounded-lg text-center sm:grid-cols-2 sm:gap-0 md:grid-cols-4"
            data-aos="fade-up">
            {data?.features?.map((feature, index) => (
              <div key={index} className={`bg-dark-primary ${feature?.highlight && 'bg-primary-800'}`}>
                <div
                  className={`bg-dark-primary ${feature?.highlight && 'bg-primary-800'} ${data?.features.length - 1 === index ? '' : 'border-r border-white/10'}`}>
                  <h3 className="border-b border-white/10 py-6 text-base-sm font-semibold uppercase">
                    {feature.title}
                  </h3>
                  <ul className="flex flex-col gap-y-6 py-6">
                    {feature.list.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm font-medium text-white/80">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default Difference;
