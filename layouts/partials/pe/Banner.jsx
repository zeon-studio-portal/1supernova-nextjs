import ArrowButton from '@components/ArrowButton';
import VisibilitySensor from 'react-visibility-sensor';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import Badge from './Badge';
import { CountUp } from 'use-count-up';

const Banner = ({ banner }) => {
  const { badge, facts } = banner;

  return (
    <section className="relative overflow-hidden pb-16 pt-32 after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-dark-primary/70 after:content-[''] ">
      <div className="relative z-30 flex flex-col justify-around gap-y-10 sm:min-h-[600px]">
        <div className="container relative z-50 text-center">
          {badge && (
            <div data-aos="fade-up">
              <Badge>{badge}</Badge>
            </div>
          )}
          <div data-aos="fade-up">
            {markdownify(
              banner.title,
              'h1',
              'text-banner mx-auto mb-8 w-fit text-h3/tight md:text-h1 font-medium [&>strong]:!text-secondary-600'
            )}
          </div>

          <div data-aos="fade-up" data-aos-delay="50">
            {markdownify(
              banner.subtitle,
              'p',
              'sm:max-w-[850px] mx-auto mb-10 md:text-xl'
            )}
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 lg:gap-8">
            {banner.fill_button && banner.fill_button.enable && (
              <ArrowButton
                label={banner.fill_button.label}
                link={banner.fill_button.link}
                data-aos="fade-up"
                data-aos-delay="150"
                className="rounded-xl bg-secondary-600 px-5 py-3 font-semibold text-dark-primary"
              />
            )}
            {banner.outline_button && banner.outline_button.enable && (
              <ArrowButton
                label={banner.outline_button.label}
                link={banner.outline_button.link}
                data-aos="fade-up"
                data-aos-delay="150"
                className="rounded-xl border border-secondary-800 bg-transparent px-5 py-3 font-semibold text-secondary-800"
              />
            )}
          </div>

          <div className="mt-16 grid gap-4 text-center sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            {facts.map((fact, index) => (
              <div
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
                className="flex flex-col rounded-2xl bg-dark-quaternary/70 py-8">
                <span className="inline-block bg-gradient-text bg-clip-text text-h3 font-semibold text-transparent">
                  {fact.prefix}

                  {fact.number > 0 && (
                    <CountUp isCounting end={fact.number} duration={1} />
                  )}
                  {fact.suffix}
                </span>
                <span>{fact.title}</span>
              </div>
            ))}
          </div>
        </div>

        {/* images */}
        <div
          className="banner-image banner-image-left -left-[360px] -z-10"
          data-aos="fade-right"
          data-aos-delay="350">
          <Image
            src="/images/chakra.svg"
            alt="supernova"
            width={550}
            height={550}
          />
        </div>
        <div
          className="banner-image banner-image-right -right-[300px] -z-10"
          data-aos="fade-left"
          data-aos-delay="350">
          <Image
            src="/images/chakra.svg"
            alt="supernova"
            width={500}
            height={500}
          />
        </div>
      </div>
      {/* banner */}
      <div className="absolute left-0 top-0 size-full">
        <div className="bg-dark z-1 absolute left-0 top-0 size-full" />
        <Image
          src={banner.background_image}
          alt="Banner"
          width="1600"
          height="800"
          className="size-full object-cover"
        />
      </div>
    </section>
  );
};

export default Banner;
