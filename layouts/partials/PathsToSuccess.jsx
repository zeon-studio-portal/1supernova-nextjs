import AnimatedText from '@components/AnimatedText';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';

const PathsToSuccess = ({ data }) => {
  const { enable, title, subtitle, lists } = data;
  return (
    enable === true && (
      <section className="section-lg bg-primary-600 ">
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
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {lists.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up-sm"
                  data-aos-delay={index * 50}
                  className="rounded-3xl bg-dark-tertiary/70">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.title}
                      layout="responsive"
                      className="h-auto w-full rounded-3xl"
                      width={400}
                      height={300}
                    />
                    {/* badge */}
                    <div
                      className={`absolute left-2.5 top-2.5   rounded-3xl px-4 py-1 text-base text-white`}
                      style={{
                        backgroundColor: item.badge.color,
                      }}>
                      {item.badge.text}
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    {markdownify(
                      item.title,
                      'h3',
                      'text-h5 font-semibold [&>strong]:text-dark-primary [&>strong]:bg-secondary-800 [&>strong]:rounded-md [&>strong]:inline-block [&>strong]:mr-2 [&>strong]:h-[35px] [&>strong]:leading-[38px] [&>strong]:px-2'
                    )}
                    {markdownify(
                      item.description,
                      'p',
                      'text-slate-50/80 mt-4'
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default PathsToSuccess;
