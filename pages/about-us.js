import config from "@config/config";
import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const aboutUs = ({ about }) => {
  const { title, description, who_we_are, why_supernova_exists, our_values, contact_us } = about.frontmatter;
  const colors = our_values.list_colors;
  const { social_media } = config;

  return (
    <Base title={title} description={description}>
      <section className="py-24">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div data-aos="fade-up-sm">
                {markdownify(title, "h1", "font-bold mb-4")}
              </div>
              <div data-aos="fade-up-sm" data-aos-delay="100">
                {markdownify(description, "p", "text-light-secondary")}
              </div>
            </div>
          </div>
        </div>
      </section>

      {who_we_are.enable === true && (
      <section className="py-24 bg-dark-secondary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div data-aos="fade-up-sm">
                {markdownify(who_we_are.title, "h2", "font-bold mb-4")}
              </div>
              <div data-aos="fade-up-sm" data-aos-delay="100">
                {markdownify(who_we_are.content, "div", "text-light-secondary")}
              </div>
            </div>
          </div>
        </div>
      </section>
      )}

      {why_supernova_exists.enable === true && (
      <section className="py-24">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-16">
              <div className="text-center">
                <div data-aos="fade-up-sm">
                  {markdownify(why_supernova_exists.title, "h2", "font-bold mb-4")}
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(why_supernova_exists.quote, "p", "text-secondary-800 font-secondary mt-6 text-3xl -rotate-1")}
                </div>
              </div>
            </div>

            {why_supernova_exists.content_left && (
              <div className="lg:col-6 mb-10 lg:mb-0" data-aos="fade-in" data-aos-delay="150">
                {markdownify(why_supernova_exists.content_left, "div", "pr-0 lg:pr-8 [&_strong]:text-secondary-800")}
              </div>
            )}
            {why_supernova_exists.content_right && (
              <div className="lg:col-6" data-aos="fade-in" data-aos-delay="250">
                {markdownify(why_supernova_exists.content_right, "div", "pl-0 lg:pl-8 [&_strong]:text-secondary-800")}
              </div>
            )}
          </div>
        </div>
      </section>
      )}

      {our_values.enable === true && (
      <section className="py-24">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-16">
              <div className="text-center">
                <div data-aos="fade-up-sm">
                  {markdownify(our_values.title, "h2", "font-bold mb-4")}
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(our_values.subtitle, "p", "text-light-secondary")}
                </div>
              </div>
            </div>

            <div className="row justify-center">
              {our_values.lists.map((item, index) => (
                <div key={index} className="lg:col-4 sm:col-6 mt-6">
                  <div className="px-6 py-28 text-center rounded-3xl h-full flex flex-col items-center justify-center" style={{backgroundColor: colors[index]}} data-aos="fade-up-sm" data-aos-delay={(index - 0.5) * 100}>
                    <p className="mb-3 text-2xl font-semibold leading-snug md:text-3xl">
                      {item.name}
                    </p>
                    <p className="block leading-snug">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>
      )}
      
      {contact_us.enable === true && (
      <section className="py-24">
        <div className="container">
          <div className="row">
            <div className="text-center md:col-5 md:text-left">
              <div className="sticky top-28">
                <div data-aos="fade-up-sm">
                  {markdownify(
                    contact_us.title,
                    "h2",
                    "text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-text text-transparent bg-clip-text leading-[1.2]"
                  )}
                </div>
                <div className="hidden space-x-3 md:flex" data-aos="fade-up-sm" data-aos-delay="50">
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
              {contact_us.lists.map((item, index) => (
                <div key={index} className="rounded-3xl bg-dark-quaternary mb-6 p-8" data-aos="fade-up-sm">
                  <p className="text-2xl mb-3">{item.title}</p>
                  <p className="font-bold mb-1">{item.name}</p>
                  {markdownify(item.email, "p", "text-light [&_a]:underline decoration-[#ddd] hover:decoration-primary hover:text-primary transition-all")}
                </div>
              ))}

              <div className="mt-10 block text-center md:hidden">
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
      )}
    </Base>
  )
}

export default aboutUs;

export const getStaticProps = async () => {
  const about = await getListPage("content/about-us.md");

  return {
    props: {
      about: about,
    },
  };
};