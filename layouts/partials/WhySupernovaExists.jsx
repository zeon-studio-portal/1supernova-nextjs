import AnimatedText from '@components/AnimatedText';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';

const WhySupernovaExists = ({ data }) => {
  const { enable, title, lists, image, image_alt } = data;
  return (
    enable === true && (
      <section className="section-lg bg-dark-secondary ">
        <div className="container text-center">
          <div data-aos="fade-up-sm" className="row gy-5 ">
            <div className="md:col-7">
              <AnimatedText
                tag="h2"
                className="mb-6 text-left text-4xl font-semibold [&>strong]:text-yellow-500"
                content={title}
              />

              {lists.map((item, index) => (
                <div key={index} className="mb-4">
                  {markdownify(
                    item.title,
                    'p',
                    `text-light-tertiary md:text-lg font-medium text-balance text-left ${index % 2 !== 0 ? '[&>strong]:text-yellow-500' : '[&>strong]:text-primary-600'} [&>strong]:font-bold`
                  )}
                </div>
              ))}
            </div>
            <div className="md:col-5 md:ps-10">
              <Image
                src={image}
                alt={image_alt}
                className="mb-8 inline-block size-full rounded-3xl object-cover"
                width={480}
                height={400}
              />
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default WhySupernovaExists;
