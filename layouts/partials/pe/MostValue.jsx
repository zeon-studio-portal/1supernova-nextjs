import React from 'react';
import SectionHeader from './SectionHeader';
import Card from './Card';

const MostValue = ({ data }) => {
  return data.enable && (
    <section className="section">
      <div className="container">
        <SectionHeader data={data} />
        <div className="grid sm:grid-cols-6 gap-6">
          {data.list.map((item, index) => (
            <div
              key={index}
              className={`${index < 2 ? 'sm:col-span-3' : 'sm:col-span-3 lg:col-span-2'}`}
              data-aos="fade-up"
              data-aos-delay={index*100}>
              <Card data={item} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MostValue;
