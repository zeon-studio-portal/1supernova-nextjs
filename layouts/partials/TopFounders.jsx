import AnimatedText from '@components/AnimatedText';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';

const TopFounders = ({ top_founders }) => {
  return (
    top_founders.frontmatter.enable === true && (
      <section id="portfolio" className="bg-dark-secondary py-24">
        <div className="container text-center">
          <div data-aos="fade-up-sm">
            <AnimatedText
              tag="h2"
              className="font-medium mb-4"
              content={top_founders.frontmatter.title}
            />
          </div>
          <div data-aos="fade-up-sm" data-aos-delay="100">
            {markdownify(
              top_founders.frontmatter.subtitle,
              'p',
              'text-light-secondary md:text-xl'
            )}
          </div>

          <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
            {top_founders.frontmatter.lists.map((item, index) => (
              <div
                key={index}
                className="flex flex-col"
                data-aos="fade-up-sm"
                data-aos-delay={(index - 0.5) * 100}>
                <div className="relative h-full overflow-hidden rounded-b-3xl rounded-t-3xl bg-[#2D2D2D]">
                  <Image
                    className="h-auto w-full max-w-full rounded-b-3xl rounded-t-3xl"
                    src={item.image}
                    alt={item.name}
                    width={160}
                    height={160}
                  />
                  <div className="px-2 py-5 sm:px-4">
                    <p className="mb-2 text-lg font-semibold leading-snug sm:text-xl">
                      {item.name}
                    </p>
                    <span className="block text-[16px] leading-snug">
                      {item.designation}
                    </span>
                  </div>
                </div>
                <div className="relative mx-auto mt-6 flex h-[55px] w-full max-w-[170px] items-center">
                  <Image
                    width={item.brand_logo.width}
                    height={item.brand_logo.height}
                    className="mx-auto"
                    src={item.brand_logo.file}
                    alt={item.name}
                  />
                </div>
                {item.description && (
                  <div className="mt-3 px-2 text-[15px] text-light-quaternary">
                    {item.description}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default TopFounders;
