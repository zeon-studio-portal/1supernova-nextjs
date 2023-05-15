import Accordion from "@components/Accordion";
import config from "@config/config";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const Faq = ({ faq }) => {
  const { social_media } = config;

  return (
    faq.frontmatter.enable === true && (
      <section id="faqs" className="py-24">
        <div className="container">
          <div className="row">
            <div className="text-center md:col-5 md:text-left">
              <div className="sticky top-28">
                <div data-aos="fade-up-sm">
                  {markdownify(
                    faq.frontmatter.title,
                    "h2",
                    "text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-text text-transparent bg-clip-text leading-[1.2]"
                  )}
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(
                    faq.frontmatter.subtitle,
                    "p",
                    "text-light-tertiary leading-normal has-link has-link-secondary mb-8 hidden md:block"
                  )}
                </div>
                <div className="hidden space-x-3 md:flex" data-aos="fade-up-sm" data-aos-delay="200">
                  {social_media.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-quaternary transition-all hover:bg-slate-800"
                      target="_blank"
                    >
                      <Image
                        src={item.icon}
                        alt="supernova"
                        width={26}
                        height={26}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="md:col-7">
              {faq.frontmatter.lists.map((item, index) => (
                <div key={index} data-aos="fade-up-sm">
                  <Accordion item={item} index={index} />
                </div>
              ))}

              <div className="mt-10 block text-center md:hidden" data-aos="fade-up-sm">
                {markdownify(
                  faq.frontmatter.subtitle,
                  "p",
                  "text-light-tertiary leading-normal has-link has-link-secondary mb-8"
                )}
                <div className="flex justify-center space-x-3">
                  {social_media.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-quaternary transition-all hover:bg-slate-800"
                      target="_blank"
                    >
                      <Image
                        src={item.icon}
                        alt="supernova"
                        width={26}
                        height={26}
                      />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  );
};

export default Faq;
