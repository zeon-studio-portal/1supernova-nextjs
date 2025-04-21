import AnimatedText from '@components/AnimatedText';
import ArrowButton from '@components/ArrowButton';
import { markdownify } from '@lib/utils/textConverter';

const CallToActionPlainBg = ({ data }) => {
  const { enable, title, subtitle, button } = data;

  return (
    enable && (
      <section className="section-lg bg-primary ">
        <div className="container text-balance text-center ">
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
              'text-light-secondary md:text-xl text-balance lg:col-8 lg:mx-auto'
            )}
          </div>

          {button.enable && (
            <ArrowButton
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="mx-auto mt-10 rounded-xl bg-secondary-600 px-5 py-3 text-dark-primary"
              label={button.label}
              link={button.link}
            />
          )}
        </div>
      </section>
    )
  );
};

export default CallToActionPlainBg;
