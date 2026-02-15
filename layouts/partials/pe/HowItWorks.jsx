import React from 'react';
import SectionHeader from './SectionHeader';

const HowItWorks = ({ data }) => {
  return (
    <section className="section bg-primary-800">
      <div className="container">
        <SectionHeader data={data} />

        <div className="relative grid gap-6 lg:grid-cols-3 lg:pr-10">
          <ul
            data-aos="fade-up"
            className="absolute bottom-5 z-0  hidden w-full overflow-hidden rounded-3xl lg:block">
            {data.comparison_table.map((item, index) => (
              <li
                key={index}
                className={
                  'py-8 pl-16 text-2xl font-medium' +
                  (index % 2 === 0
                    ? ' bg-primary-1000/80'
                    : ' bg-primary-1000/60')
                }>
                {item.category}
              </li>
            ))}
          </ul>
          <div className="hidden lg:block"></div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative z-10 rounded-3xl  bg-dark-quaternary p-6 text-center">
            <h3 className="mb-10 text-2xl font-semibold uppercase">
              traditional
            </h3>
            <ul className="flex flex-col gap-y-8">
              {data.comparison_table.map((item, index) => (
                <li key={index} className=" text-light-primary/70">
                  {item.traditional}
                </li>
              ))}
            </ul>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="relative z-10 rounded-3xl  bg-dark-quaternary p-6 text-center">
            <h3 className="mb-10 text-2xl font-semibold uppercase">
              supernova
            </h3>
            <ul className="flex flex-col gap-y-8">
              {data.comparison_table.map((item, index) => (
                <li key={index} className=" text-light-primary/70">
                  {item.supernova}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
