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
              <Image
                src={'/images/apply/star.svg'}
                alt="star"
                width={16}
                height={16}
                className="h-[1lh] w-4 flex-shrink-0 text-secondary-800"
              />

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
