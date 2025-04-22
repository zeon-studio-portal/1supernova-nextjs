import ArrowButton from '@components/ArrowButton';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const WhoCanApply = ({ data }) => {
  const {
    enable,
    main_image_title,
    main_image,
    comparison_image,
    intro,
    testimonial,
    list,
    footer,
  } = data;

  return (
    enable === true && (
      <section id="mission" className="mission py-24">
        <div className="container">
          {/* INTRO */}
          <div className="mb-8">
            <div data-aos="fade-up-sm">
              {markdownify(
                intro.title,
                'h2',
                ' h4 font-semibold mb-4 [&>strong]:text-yellow-500'
              )}
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(intro.description, 'p', 'text-slate-50/50 text-lg')}
            </div>
          </div>
          <div className="row gy-5 items-center">
            <div className="lg:col-6">
              <div className="flex flex-col gap-y-8 lg:gap-y-16 lg:pe-10">
                <div
                  className="flex flex-col gap-4"
                  data-aos="fade-up-sm"
                  data-aos-delay={200}>
                  {list.map((card, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 rounded-lg bg-dark-quaternary/90 p-4 text-start text-lg backdrop-blur-md">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        className=" min-h-6 min-w-[1lh]"
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
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 12L11 15L17 9"
                            stroke="black"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </mask>
                        <g mask="url(#mask0_1455_3981)">
                          <path
                            d="M0 0H24V24H0V0Z"
                            fill="url(#paint0_linear_1455_3981)"
                          />
                        </g>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1455_3981"
                            x1="-1.58647"
                            y1="-3.96616"
                            x2="33.1895"
                            y2="15.6812"
                            gradientUnits="userSpaceOnUse">
                            <stop stopColor="#0AA5FE" />
                            <stop offset="0.255208" stopColor="#02DDEB" />
                            <stop offset="0.46875" stopColor="#FDD13B" />
                            <stop offset="0.729167" stopColor="#FF8F81" />
                            <stop offset="1" stopColor="#C14ECF" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <div className="flex flex-col gap-2">
                        <h3>
                          {markdownify(
                            card.title,
                            'p',
                            'text-h6 font-semibold'
                          )}
                        </h3>
                        <div className="text-slate-50/50">
                          {markdownify(
                            card.description,
                            'p',
                            'text-slate-50/50'
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              {footer && (
                <>
                  <div
                    data-aos="fade-up-sm"
                    data-aos-delay="150"
                    className="mt-6">
                    {markdownify(footer.texts, 'p', 'text-slate-50/50 text-lg')}
                  </div>
                  {footer.button && footer.button.enable && (
                    <ArrowButton
                      data-aos="fade-up-sm"
                      data-aos-delay="150"
                      className="mt-4 rounded-xl bg-secondary-600 px-5 py-3 text-dark-primary"
                      label={footer.button.label}
                      link={footer.button.link}
                    />
                  )}
                </>
              )}
            </div>
            <div className="lg:col-6 lg:ps-10">
              <div className="flex flex-col gap-y-10">
                <div>
                  {main_image_title && (
                    <div data-aos="fade-up-sm" data-aos-delay={50}>
                      {markdownify(
                        main_image_title,
                        'p',
                        'text-h6 font-semibold mb-4 '
                      )}
                    </div>
                  )}
                  {
                    <div data-aos="fade-up-sm" data-aos-delay={100}>
                      <Image
                        className="w-full object-cover object-top"
                        width={514}
                        height={288}
                        src={main_image}
                        alt={'pvc'}
                      />
                    </div>
                  }
                </div>
                {
                  <div data-aos="fade-up-sm" data-aos-delay={150}>
                    <Image
                      className="w-full object-cover object-top"
                      width={514}
                      height={288}
                      src={comparison_image}
                      alt={'pvc'}
                    />
                  </div>
                }
                {testimonial && (
                  <div className="" data-aos="fade-up-sm" data-aos-delay={300}>
                    {testimonial.content && (
                      <div className="">
                        {markdownify(
                          testimonial.content,
                          'p',
                          'text-lg text-slate-50/80'
                        )}
                      </div>
                    )}
                    <div className="mt-4 flex items-center gap-4">
                      {testimonial.customer_avatar && (
                        <Image
                          className="h-14 w-14 rounded-full"
                          src={testimonial.customer_avatar}
                          width={56}
                          height={56}
                          alt={testimonial.customer_name}
                        />
                      )}
                      <div>
                        {testimonial.customer_name && (
                          <div className="text-lg text-slate-50/70">
                            {markdownify(
                              testimonial.customer_name,
                              'p',
                              'text-lg text-slate-50/70'
                            )}
                          </div>
                        )}
                        {testimonial.customer_profession && (
                          <div className="uppercase">
                            {markdownify(
                              testimonial.customer_profession,
                              'p',
                              'uppercase text-xs opacity-60'
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default WhoCanApply;
