import AnimatedText from '@components/AnimatedText';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';

const WhyChooseSupernova = ({ data }) => {
  const { enable, title, subtitle, lists } = data;
  return (
    enable === true && (
      <section className="section-lg bg-dark-secondary ">
        <div className="container text-center">
          <div data-aos="fade-up-sm">
            <AnimatedText
              tag="h2"
              className="mb-4 font-medium"
              content={title}
            />
          </div>
          <div data-aos="fade-up-sm" data-aos-delay="100">
            {markdownify(
              subtitle,
              'p',
              'text-light-secondary md:text-xl text-balance'
            )}
          </div>

          <div className="mt-14">
            <div data-aos="fade-up-sm" className="flex flex-wrap gap-6 ">
              {lists.map((item, index) => (
                <div
                  key={index}
                  className={`rounded-3xl bg-dark-quaternary p-8 text-left ${index === 0 || index === 1 ? 'lg:w-[48%]' : 'lg:w-[31%]'}`}>
                  <Image
                    src={item.icon}
                    alt=""
                    className={`mb-8 inline-block size-9 `}
                    width={64}
                    height={64}
                  />
                  {markdownify(
                    item.title,
                    'h3',
                    `text-h5 ${index === 0 || index === 1 ? 'lg:text-h4' : ''} font-semibold [&>strong]:text-dark-primary [&>strong]:bg-secondary-800 [&>strong]:rounded-md [&>strong]:inline-block [&>strong]:mr-2 [&>strong]:h-[35px] [&>strong]:leading-[38px] [&>strong]:px-2 mb-4`
                  )}
                  {markdownify(
                    item.description,
                    'p',
                    'text-light-secondary md:text-lg text-balance'
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default WhyChooseSupernova;
