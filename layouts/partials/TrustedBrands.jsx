import AnimatedText from '@components/AnimatedText';
import BrandCard from '@components/BrandCard';
import { markdownify } from '@lib/utils/textConverter';

const TrustedBrands = ({ trusted_brands }) => {
  const brandlist = trusted_brands.frontmatter.brand_list;
  const third = Math.ceil(brandlist.length / 3);
  const firstList = brandlist.slice(0, third);
  const secondList = brandlist.slice(third, third * 2);
  const thirdList = brandlist.slice(third * 2);


  return (
    trusted_brands.frontmatter.enable === true && (
      <section id="trusted-brands" className="mb-24 pt-24">
        <div className="max-auto">
          {/* Section Header */}
          <div className="text-center">
            <div data-aos="fade-up-sm">
              <AnimatedText
                tag="h2"
                className="mb-4 font-medium"
                content={trusted_brands.frontmatter.title}
              />
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(
                trusted_brands.frontmatter.subtitle,
                'p',
                'text-light-secondary md:text-xl'
              )}
            </div>

            <div data-aos="fade-up-sm" data-aos-delay="200">
              {markdownify(
                trusted_brands.frontmatter.quote,
                'p',
                'text-secondary-800 font-secondary mt-6 text-2xl -rotate-1'
              )}
            </div>
          </div>

          <div className="pt-14">
            <div className="marquee-wrapper on-hover-pause-animation flex gap-5 md:gap-10 overflow-hidden">
              <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {firstList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
                <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {firstList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
              <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {firstList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
            </div>

            <div className="marquee-wrapper on-hover-pause-animation flex gap-5 md:gap-10 overflow-hidden mt-5 md:mt-10">
              <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {secondList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
              <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {secondList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
               <div className="marquee marquee-duration-60 marquee-reverse flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {secondList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
            </div>

            <div className="marquee-wrapper on-hover-pause-animation flex gap-5 md:gap-10 overflow-hidden mt-5 md:mt-10">
              <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {thirdList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
              <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {thirdList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
              <div className="marquee marquee-duration-60 flex shrink-0 items-center justify-center gap-5 md:gap-10">
                {thirdList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default TrustedBrands;
