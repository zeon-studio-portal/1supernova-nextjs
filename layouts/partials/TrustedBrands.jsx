import AnimatedText from '@components/AnimatedText';
import BrandCard from '@components/BrandCard';
import { markdownify } from '@lib/utils/textConverter';

const TrustedBrands = ({ trusted_brands }) => {
  const firstList = trusted_brands.frontmatter.brand_list;
  const secondList = [...firstList].sort(() => 0.5 - Math.random());

  return (
    trusted_brands.frontmatter.enable === true && (
      <section id="trusted-brands" className="mb-24 pt-24">
        <div className="">
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
            <div className="marquee-wrapper on-hover-pause-animation flex gap-5 overflow-hidden">
              <div className="marquee marquee-duration-120 flex shrink-0 items-center justify-center gap-5">
                {firstList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
                <div className="marquee marquee-duration-120 flex shrink-0 items-center justify-center gap-5">
                {firstList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
            </div>

            <div className="marquee-wrapper on-hover-pause-animation flex gap-5 overflow-hidden mt-5">
              <div className="marquee marquee-duration-120 marquee-reverse flex shrink-0 items-center justify-center gap-5">
                {secondList.map(( item, index ) => (
                  <BrandCard item={item} key={index} />
                ))}
              </div>
              <div className="marquee marquee-duration-120 marquee-reverse flex shrink-0 items-center justify-center gap-5">
                {secondList.map(( item, index ) => (
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
