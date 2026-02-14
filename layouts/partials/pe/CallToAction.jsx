import ArrowButton from '@components/ArrowButton';
import { FaRegEnvelope } from 'react-icons/fa';

import Link from 'next/link';
import React from 'react';

const CallToAction = ({ cta }) => {
  return (
    cta.enable && (
      <section className="section">
        <div className="container">
          <div className="rounded-2xl bg-secondary-800 px-6 py-16 sm:py-24 text-center text-dark-primary">
            <h2
              data-aos="fade-up"
              className=" mx-auto mb-4 text-h3 lg:text-h2 font-semibold lg:w-4/5">
              {cta.title}
            </h2>
            <p data-aos="fade-up" className="mx-auto mb-8 font-medium lg:w-3/5">
              {cta.content}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-6">
              {cta.button_fill && cta.button_fill.enable && (
                <ArrowButton
                  label={cta.button_fill.label}
                  link={cta.button_fill.link}
                  data-aos="fade-up"
                  data-aos-delay="150"
                  className="rounded-xl bg-dark-primary px-8 py-3 text-light-primary"
                />
              )}
              {cta.button_outline && cta.button_outline.enable && (
                <Link
                  data-aos="fade-up"
                  data-aos-delay="150"
                  href={cta.button_outline.link}
                  className="flex items-center gap-2 rounded-xl border border-dark-primary px-8 py-3 font-medium hover:bg-dark-primary hover:text-light-primary">
                  <FaRegEnvelope />
                  {cta.button_outline.label}
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default CallToAction;
