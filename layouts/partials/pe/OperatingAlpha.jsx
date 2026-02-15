import React from 'react';
import SectionHeader from './SectionHeader';

const OperatingAlpha = ({ data }) => {
  return data.enable && (
    <section className="section bg-dark-secondary" id='operating-alpha'>
      <div className="container">
        <SectionHeader data={data} />

        <div className="grid md:grid-cols-12 gap-6">
          <div className="md:col-span-7">
            <ul>
              {data.bullet_points?.map((points, index) => (
                <li
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                  className="mb-2 flex gap-3 rounded-2xl bg-dark-quaternary p-4 ">
                    {points.emoji ? <span className='text-2xl'>{points.emoji}</span>:  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className=" min-h-6 min-w-[1lh] flex-shrink-0"
                    xmlns="http://www.w3.org/2000/svg">
                    <mask
                      id="mask0_1455_3981"
                      style={{ maskType: 'luminance' }}
                      maskUnits="userSpaceOnUse"
                      x="1"
                      y="1"
                      width="22"
                      height="22">
                      <path
                        d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z"
                        fill="white"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinejoin="round"></path>
                      <path
                        d="M8 12L11 15L17 9"
                        stroke="black"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                    </mask>
                    <g mask="url(#mask0_1455_3981)">
                      <path
                        d="M0 0H24V24H0V0Z"
                        fill="url(#paint0_linear_1455_3981)"></path>
                    </g>
                    <defs>
                      <linearGradient
                        id="paint0_linear_1455_3981"
                        x1="-1.58647"
                        y1="-3.96616"
                        x2="33.1895"
                        y2="15.6812"
                        gradientUnits="userSpaceOnUse">
                        <stop stopColor="#0AA5FE"></stop>
                        <stop offset="0.255208" stopColor="#02DDEB"></stop>
                        <stop offset="0.46875" stopColor="#FDD13B"></stop>
                        <stop offset="0.729167" stopColor="#FF8F81"></stop>
                        <stop offset="1" stopColor="#C14ECF"></stop>
                      </linearGradient>
                    </defs>
                  </svg>}
                

                  <div>
                    <h4 className="mb-2 text-xl font-semibold">
                      {points.title}
                    </h4>
                    <p className="font-medium text-light-quaternary">
                      {points.subtitle}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:col-span-5">
            <div
              className="h-full rounded-3xl bg-dark-quaternary p-8"
              data-aos="fade-up"
              data-aos-delay={data.bullet_points?.length * 100}>
              <h4 className="mb-6 text-xl font-semibold">
                {data.content_box.title}
              </h4>
              <ul>
                {data.content_box.list.map((item, index) => (
                  <li
                    key={index}
                    className="mb-3 flex gap-3 rounded-md bg-dark-primary px-4 py-2 text-base-sm font-medium">
                    <span className="mt-2 inline-block size-1.5 flex-shrink-0 rounded-full bg-secondary-800"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperatingAlpha;
