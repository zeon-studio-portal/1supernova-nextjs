import ArrowButton from '@components/ArrowButton';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/pagination';

const JoinSupernovaNetwork = ({ data }) => {
  const {
    enable,
    main_image,
    comparison_image,
    title,
    subtitle,
    description,
    button,
    testimonial,
  } = data;

  return (
    enable === true && (
      <section id="join_the_supernova_network" className="bg-primary py-24">
        <div className="container">
          <div className="row items-start max-lg:gy-5">
            <div className="lg:col-6">
              <div className="flex flex-col gap-y-8 lg:gap-y-16 lg:pe-10">
                <div>
                  <div data-aos="fade-up-sm">
                    {markdownify(
                      title,
                      'h2',
                      'text-h3_sm mb-4 !font-semibold [&>strong]:text-yellow-500 '
                    )}
                  </div>
                  {subtitle && (
                    <div data-aos="fade-up-sm" data-aos-delay={50}>
                      {markdownify(
                        subtitle,
                        'p',
                        ' [&>strong]:text-yellow-400 mb-8'
                      )}
                    </div>
                  )}
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    {markdownify(description, 'p', 'text-slate-100 text-base')}
                  </div>
                  {button && button.enable && (
                    <div data-aos="fade-up-sm">
                      <ArrowButton
                        link={button.link}
                        label={button.label}
                        className={
                          'mt-4 rounded-xl bg-secondary-600 px-5 py-3 text-dark-primary'
                        }
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="lg:col-6 lg:ps-10">
              <div className="flex flex-col gap-y-6">
                {
                  <div data-aos="fade-up-sm" data-aos-delay={100}>
                    <Image
                      className="w-full object-cover object-top"
                      width={514}
                      height={288}
                      src={main_image}
                      alt={'pvc'}
                    />
                  </div>
                }
                {comparison_image && (
                  <div data-aos="fade-up-sm" data-aos-delay={150}>
                    <Image
                      className="w-full object-cover object-top"
                      width={514}
                      height={288}
                      src={comparison_image}
                      alt={'pvc'}
                    />
                  </div>
                )}
                {testimonial && (
                  <div className="" data-aos="fade-up-sm" data-aos-delay={300}>
                    {testimonial.content && (
                      <div className="">
                        {markdownify(
                          testimonial.content,
                          'p',
                          'text-lg text-slate-100'
                        )}
                      </div>
                    )}
                    <div className=" mt-6 flex items-center gap-4">
                      {testimonial.customer_avatar && (
                        <Image
                          className="h-14 w-14 rounded-full"
                          src={testimonial.customer_avatar}
                          width={56}
                          height={56}
                          alt={testimonial.customer_name}
                        />
                      )}
                      <div>
                        {testimonial.customer_name && (
                          <div className="mb-1.5 text-lg ">
                            {markdownify(
                              testimonial.customer_name,
                              'p',
                              'text-lg text-slate-100'
                            )}
                          </div>
                        )}
                        {testimonial.customer_profession && (
                          <div className="uppercase">
                            {markdownify(
                              testimonial.customer_profession,
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
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default JoinSupernovaNetwork;
