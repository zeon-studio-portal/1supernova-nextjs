import config from "@config/config.json";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import VisibilitySensor from "react-visibility-sensor";
import { CountUp } from 'use-count-up';

const Advisory = ({ advisory }) => {
  const colors = advisory.facts_colors;
  
  return (
    advisory.enable === true && (
      <section className="bg-dark-secondary py-24">
        <div className="container text-center">
          <div data-aos="fade-up-sm">{markdownify(advisory.title, "h2", "font-medium mb-4")}</div>
          <div data-aos="fade-up-sm" data-aos-delay="100">{markdownify(advisory.subtitle, "p", "text-light-secondary")}</div>

          <div className="mt-20 md:flex md:space-x-6 lg:space-x-10">
            <div>
              <span className="mb-12 sm:mb-20 inline-block -rotate-3 rounded-xl bg-dark-tertiary px-8 py-7 overflow-hidden">
                <Image
                  src={config.site.logo}
                  alt="supernova"
                  width={config.site.logo_width}
                  height={config.site.logo_height}
                  data-aos="fade-in"
                />
              </span>
              <span className="relative flex justify-center">
                <Image
                  className="absolute -ml-[65%] sm:-ml-48 md:-ml-20 lg:-ml-40 -top-8 sm:-top-16 w-[100px] sm:w-auto"
                  src="/images/advisory/line-1.svg"
                  alt="line"
                  width={182}
                  height={127}
                  priority
                  data-aos="fade-in"
                  data-aos-delay="50"
                />
                <div data-aos="fade-in" data-aos-delay="100" >
                  {markdownify(
                    advisory.quote,
                    "p",
                    "text-left font-secondary sm:text-2xl pl-10 -rotate-3 max-w-[310px]"
                  )}
                </div>
              </span>
            </div>
            <div
              className="mt-8 md:mt-20 lg:mt-14 pointer-events-none select-none"
              data-aos="fade-in"
              data-aos-delay="150"
            >
              <Image
                className="hidden md:block"
                src={advisory.services_image}
                alt="services"
                width={536}
                height={283}
              />
              <Image
                className="block md:hidden mx-auto"
                src={advisory.services_image_mobile}
                alt="services"
                width={285}
                height={354}
              />
            </div>
            <div className="mt-8 self-center" data-aos="fade-in" data-aos-delay="200">
              <div className="bg-dark-quaternary rounded-3xl rotate-6 inline-block">
                <Image
                  className="rounded-3xl"
                  src={advisory.founder_image}
                  alt="founder"
                  width={156}
                  height={156}
                />
                <span className="font-secondary py-4 inline-block">Founder</span>
              </div>
            </div>
          </div>

          <VisibilitySensor>
            {({isVisible}) =>
              <div className="row mt-20">
                {advisory.facts.map((fact, index) => (
                  <div
                    key={index}
                    className="md:col-3 sm:col-6 text-center gy-4 md:gy-5"
                    data-aos="fade-up-sm"
                    data-aos-delay={index * 100}
                  >
                    <span className="block text-4xl font-bold h-[50px]" style={{color: colors[index]}}>
                      {fact.number > 0 && isVisible && <CountUp isCounting end={fact.number} duration={1} /> }{fact.suffix}
                    </span>
                    <p className="font-secondary text-2xl mt-1 md:mt-3 -rotate-3">{fact.title}</p>
                  </div>
                ))}
              </div>
            }
          </VisibilitySensor>
        </div>
      </section>
    )
  );
};

export default Advisory;
