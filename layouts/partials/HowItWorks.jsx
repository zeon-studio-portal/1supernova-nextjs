import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const HowItWorks = ({ how_it_works }) => {
  const tabLength = how_it_works.frontmatter.process.length;
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
    }, 4000);
    return () => clearInterval(interval);
  }, [indexTab, tabLength]);

  return (
    how_it_works.frontmatter.enable === true && (
      <section
        id="how-it-works"
        className="how-it-works"
        style={{ '--tab-length': tabLength, '--tab-index': indexTab }}>
        <div className="container relative z-40">
          <div className="row">
            <div className="py-24 md:col-6">
              <div className="md:pr-10">
                <div data-aos="fade-up-sm">
                  {markdownify(
                    how_it_works.frontmatter.title,
                    'h2',
                    'font-medium text-center md:text-left'
                  )}
                </div>

                <div
                  className={`tab-buttons mt-16 md:mb-20 md:mt-20`}
                  data-aos="fade-up-sm"
                  data-aos-delay="100">
                  {how_it_works.frontmatter.process.map((item, index) => (
                    <div
                      key={index}
                      className={`tab-button-item group ${
                        indexTab === index + 1 ? 'active' : ''
                      }`}
                      onClick={() => handleTabClick(index + 1)}>
                      <span className="opacity-70 group-[.active]:opacity-100">
                        {item.name}
                      </span>
                      <div className="block md:hidden">
                        <div
                          className={`mb-2 mt-4 ${
                            indexTab === index + 1 ? '' : 'hidden'
                          }`}>
                          {markdownify(
                            item.content,
                            'div',
                            'text-white text-xl leading-normal has-link font-medium'
                          )}
                          {item.button.enable && (
                            <a
                              className="btn btn-light mt-4 text-sm md:text-base"
                              href={item.button.link}>
                              {item.button.label}
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {how_it_works.frontmatter.quote.enable && (
                  <div className="hidden rounded-2xl bg-white px-8 py-6 text-center md:block">
                    {markdownify(
                      how_it_works.frontmatter.quote.content,
                      'p',
                      'mb-4 text-dark-primary font-secondary text-2xl'
                    )}
                    {markdownify(
                      how_it_works.frontmatter.quote.quote_by,
                      'p',
                      'text-secondary-1000 text-sm'
                    )}
                  </div>
                )}
              </div>
            </div>
            <div
              className="hidden py-24 md:col-6 md:block"
              data-aos="fade-up-sm"
              data-aos-delay="150">
              <div className="flex h-full items-center pl-10">
                {how_it_works.frontmatter.process.map((item, index) => (
                  <div
                    key={index}
                    className={`absolute transition-all duration-500 ${
                      indexTab === index + 1 ? '' : 'opacity-0'
                    }`}>
                    {markdownify(
                      item.content,
                      'div',
                      'text-white text-3xl leading-normal has-link'
                    )}
                    {item.button.enable && (
                      <a
                        className="btn btn-light mt-8"
                        href={item.button.link}>
                        {item.button.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {how_it_works.frontmatter.quote && (
          <div className="block md:hidden">
            <div className="bg-white px-8 py-6 text-center">
              {markdownify(
                how_it_works.frontmatter.quote.content,
                'p',
                'mb-4 text-dark-primary font-secondary text-2xl'
              )}
              {markdownify(
                how_it_works.frontmatter.quote.quote_by,
                'p',
                'text-secondary-1000 text-sm'
              )}
            </div>
          </div>
        )}
        <Image
          className="chakra-image hidden md:block"
          src="/images/chakra-2.svg"
          alt="chakra-2"
          width={490}
          height={490}
        />
      </section>
    )
  );
};

export default HowItWorks;
