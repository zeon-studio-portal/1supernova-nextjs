import AnimatedText from '@components/AnimatedText';
import ArrowButton from '@components/ArrowButton';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HowItWorksAboutPage = ({ data }) => {
  const tabLength = data.process.length;
  const [indexTab, setIndexTab] = useState(1);
  const handleTabClick = (index) => {
    setIndexTab(index);
  };

  // set autoplay
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexTab === tabLength) {
        setIndexTab(1);
      } else {
        setIndexTab(indexTab + 1);
      }
    }, 1000000);
    return () => clearInterval(interval);
  }, [indexTab, tabLength]);

  return (
    data.enable === true && (
      <section
        id="how-it-works"
        className="how-it-works "
        style={{ '--tab-length': tabLength, '--tab-index': indexTab }}>
        <div className="container relative z-40">
          <div className="row">
            <div className="py-24 md:col-6">
              <div className="md:pr-10">
                <div data-aos="fade-up-sm">
                  <AnimatedText
                    tag="h2"
                    className="text-blue text-center font-medium md:text-left"
                    content={data.title}
                  />
                </div>

                <div
                  className={`tab-buttons mt-10 md:mb-10 `}
                  data-aos="fade-up-sm"
                  data-aos-delay="100">
                  {data.process.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-button-item group ${
                        indexTab === index + 1 ? 'active' : ''
                      }`}
                      onClick={() => handleTabClick(index + 1)}>
                      <span className="opacity-70 group-[.active]:opacity-100">
                        {item.name}
                      </span>

                      {/* MOBILE ONLY */}
                      <div className="block md:hidden">
                        <div
                          className={`mb-2 mt-4 space-y-10 ${
                            indexTab === index + 1 ? '' : 'hidden'
                          }`}>
                          <HowItWorksRightSection
                            right_section={item.data.right_section}
                          />
                          <HowItWorksLeftSection
                            left_section={item.data.left_section}
                            key={index}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* DATA: LEFT SECTION - TABLET to DESKTOP ONLY */}
                {data.process.map((item, index) => {
                  const isActive = indexTab === index + 1;
                  return (
                    isActive && (
                      <div
                        key={index}
                        className={`hidden transition-all duration-500 md:block ${
                          indexTab === index + 1 ? ' z-10' : ' opacity-0'
                        }`}>
                        <HowItWorksLeftSection
                          left_section={item.data.left_section}
                          key={index}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
            <div
              className="hidden py-24 md:col-6 md:block"
              data-aos="fade-up-sm"
              data-aos-delay="150">
              <div className="flex h-full items-center pl-10">
                {/* DATA: RIGHT SECTION */}
                {data.process.map((item, index) => {
                  const isActive = indexTab === index + 1;
                  return (
                    isActive && (
                      <div
                        key={index}
                        className={` transition-all duration-500 ${
                          indexTab === index + 1 ? ' z-10' : ' opacity-0'
                        }`}>
                        <HowItWorksRightSection
                          right_section={item.data.right_section}
                        />
                      </div>
                    )
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {data.quote && (
          <div className="block md:hidden">
            <div className="bg-white px-8 py-6 text-center">
              {markdownify(
                data.quote.content,
                'p',
                'mb-4 text-dark-primary font-secondary text-2xl'
              )}
              {markdownify(
                data.quote.quote_by,
                'p',
                'text-secondary-1000 text-sm'
              )}
            </div>
          </div>
        )}
        <Image
          className="chakra-image hidden size-[400px] md:block 2xl:size-auto"
          src="/images/chakra-2.svg"
          alt="chakra-2"
          width={490}
          height={490}
        />
      </section>
    )
  );
};

const HowItWorksLeftSection = ({ left_section }) => {
  const { button, testimonial } = left_section;

  return (
    <div data-aos="fade-in" data-aos-delay={150}>
      {button.enable && (
        <ArrowButton
          link={button.link}
          label={button.label}
          className={
            'mt-4 rounded-xl bg-secondary-600 px-5 py-3 text-lg font-medium text-dark-primary'
          }
        />
      )}
      {testimonial.enable && (
        <div className="mt-10">
          {testimonial.content && (
            <div className="">
              {markdownify(testimonial.content, 'p', 'text-lg text-slate-100')}
            </div>
          )}
          <div className=" mt-6 flex items-center gap-4">
            {testimonial.author_image && (
              <Image
                className="h-14 w-14 rounded-full"
                src={testimonial.author_image}
                width={56}
                height={56}
                alt={testimonial.author_name}
              />
            )}
            <div>
              {testimonial.author_name && (
                <div className="mb-1.5 text-lg text-light-primary">
                  {markdownify(
                    testimonial.author_name,
                    'p',
                    'text-lg font-semibold text-slate-100'
                  )}
                </div>
              )}
              {testimonial.author_profession && (
                <div className="uppercase">
                  {markdownify(
                    testimonial.author_profession,
                    'p',
                    'uppercase text-base-sm text-slate-100'
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HowItWorksRightSection = ({ right_section }) => {
  const { intro, contents } = right_section;

  return (
    <div
      className="flex flex-col gap-8"
      data-aos="fade-in"
      data-aos-delay={150}>
      <div className="border-b border-light-quaternary">
        <h2 className="mb-0 text-h2_sm font-semibold leading-tight">
          {intro.title}
        </h2>
        {intro.subtitle && (
          <div className="mb-4">
            {markdownify(intro.subtitle, 'p', 'text-h3_sm ')}
          </div>
        )}
        {intro.duration && (
          <div className="mb-4">
            {markdownify(intro.duration, 'p', 'text-base text-secondary-200')}
          </div>
        )}
      </div>
      {contents.list.length > 0 && (
        <div className="flex flex-col gap-4">
          {contents.list.map((item, index) => (
            <div key={index} className="flex items-start gap-4 text-base/6 ">
              <svg
                className="min-h-4 min-w-[1lh] "
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C8.17384 3.58409e-05 8.34294 0.0566902 8.48171 0.16139C8.62048 0.266091 8.72137 0.413139 8.76912 0.580288L9.63638 3.61613C9.82312 4.26993 10.1734 4.86535 10.6542 5.34614C11.1351 5.82694 11.7305 6.17724 12.3843 6.36396L15.4203 7.23119C15.5873 7.27905 15.7342 7.37998 15.8388 7.51874C15.9434 7.65749 16 7.82653 16 8.00029C16 8.17405 15.9434 8.34308 15.8388 8.48184C15.7342 8.6206 15.5873 8.72153 15.4203 8.76938L12.3843 9.63661C11.7305 9.82334 11.1351 10.1736 10.6542 10.6544C10.1734 11.1352 9.82312 11.7306 9.63638 12.3844L8.76912 15.4203C8.72127 15.5873 8.62033 15.7343 8.48157 15.8388C8.34281 15.9434 8.17377 16 8 16C7.82623 16 7.65719 15.9434 7.51843 15.8388C7.37967 15.7343 7.27873 15.5873 7.23088 15.4203L6.36362 12.3844C6.17688 11.7306 5.82657 11.1352 5.34576 10.6544C4.86495 10.1736 4.26951 9.82334 3.61568 9.63661L0.579732 8.76938C0.412685 8.72153 0.265759 8.6206 0.161166 8.48184C0.056573 8.34308 0 8.17405 0 8.00029C0 7.82653 0.056573 7.65749 0.161166 7.51874C0.265759 7.37998 0.412685 7.27905 0.579732 7.23119L3.61568 6.36396C4.26951 6.17724 4.86495 5.82694 5.34576 5.34614C5.82657 4.86535 6.17688 4.26993 6.36362 3.61613L7.23088 0.580288C7.27863 0.413139 7.37952 0.266091 7.51829 0.16139C7.65706 0.0566902 7.82616 3.58409e-05 8 0Z"
                  fill="url(#paint0_linear_1592_233sd)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1592_233sd"
                    x1="-1.05765"
                    y1="-2.64411"
                    x2="22.1263"
                    y2="10.4542"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="#0AA5FE" />
                    <stop offset="0.255208" stop-color="#02DDEB" />
                    <stop offset="0.46875" stop-color="#FDD13B" />
                    <stop offset="0.729167" stop-color="#FF8F81" />
                    <stop offset="1" stop-color="#C14ECF" />
                  </linearGradient>
                </defs>
              </svg>

              {markdownify(
                item,
                'p',
                'text-base [&>strong]:!text-secondary-800'
              )}
            </div>
          ))}
        </div>
      )}
      {contents.footnote && (
        <div className=" [&>string]:!text-h3">
          {markdownify(
            contents.footnote,
            'p',
            'text-lg [&>strong]:text-secondary-800 [&>strong]:text-xl '
          )}
        </div>
      )}
    </div>
  );
};

export default HowItWorksAboutPage;
