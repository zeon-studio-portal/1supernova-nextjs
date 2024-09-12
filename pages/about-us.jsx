import config from '@config/config';
import Base from '@layouts/Baseof';
import { getListPage } from '@lib/contentParser';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';

const aboutUs = ({ about }) => {
  const {
    title,
    description,
    who_we_are,
    why_supernova_exists,
    our_values,
    leadership_team,
    contact_us,
  } = about.frontmatter;
  const colors = our_values.list_colors;
  const { social_media } = config;

  return (
    <Base title={title} description={description}>
      <section className="bg-[url('/images/about-us-bg.jpg')] bg-contain bg-center pt-24 text-center">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div data-aos="fade-up-sm">
                {markdownify(title, 'h1', 'font-bold mb-4')}
              </div>
              <div data-aos="fade-up-sm" data-aos-delay="50">
                {markdownify(
                  description,
                  'p',
                  'text-light-secondary md:text-xl'
                )}
              </div>
            </div>
          </div>
        </div>

        {who_we_are.enable === true && (
          <div className="container pt-28">
            <div className="row">
              <div className="col-12">
                <div data-aos="fade-up-sm" data-aos-delay="100">
                  {markdownify(who_we_are.title, 'h2', 'font-bold mb-4')}
                </div>
                <div data-aos="fade-up-sm" data-aos-delay="150">
                  {markdownify(
                    who_we_are.content,
                    'div',
                    'text-light-secondary'
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {our_values.enable === true && (
          <div className="mt-32" data-aos="fade-up-sm" data-aos-delay="200">
            <Image
              src={our_values.image}
              alt="1supernova"
              height={446}
              width={464}
              className="mx-auto"
            />
          </div>
        )}
      </section>

      {our_values.enable === true && (
        <section className="py-24">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-16">
                <div className="text-center">
                  <div data-aos="fade-up-sm">
                    {markdownify(our_values.title, 'h2', 'font-bold mb-4')}
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    {markdownify(
                      our_values.subtitle,
                      'p',
                      'text-light-secondary md:text-xl'
                    )}
                  </div>
                </div>
              </div>

              <div className="row justify-center">
                {our_values.lists.map((item, index) => (
                  <div key={index} className="mt-6 sm:col-6 lg:col-4">
                    <div
                      className="flex h-full flex-col items-center rounded-3xl px-6 py-20 text-center"
                      style={{ backgroundColor: colors[index] }}
                      data-aos="fade-up-sm"
                      data-aos-delay={(index - 0.5) * 100}>
                      <div
                        className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl"
                        style={{ color: colors[index] }}>
                        {index + 1}
                      </div>
                      <p className="mb-3 text-2xl font-semibold leading-snug md:text-3xl">
                        {item.name}
                      </p>
                      <p className="block leading-relaxed">{item.content}</p>
                    </div>
                  </div>
                ))}
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
                    {markdownify(
                      why_supernova_exists.title,
                      'h2',
                      'font-bold mb-4'
                    )}
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    {markdownify(
                      why_supernova_exists.quote,
                      'p',
                      'text-secondary-800 font-secondary mt-6 text-3xl -rotate-1'
                    )}
                  </div>
                </div>
              </div>

              {why_supernova_exists.content_left && (
                <div
                  className="mb-10 lg:col-6 lg:mb-0"
                  data-aos="fade-in"
                  data-aos-delay="150">
                  {markdownify(
                    why_supernova_exists.content_left,
                    'div',
                    'pr-0 lg:pr-8 [&_strong]:text-secondary-800 [&_strong]:font-[900]'
                  )}
                </div>
              )}
              {why_supernova_exists.content_right && (
                <div
                  className="lg:col-6"
                  data-aos="fade-in"
                  data-aos-delay="250">
                  {markdownify(
                    why_supernova_exists.content_right,
                    'div',
                    'pl-0 lg:pl-8 [&_p:nth-child(1)_strong]:text-[#09B1FB] [&_p:nth-child(2)_strong]:text-[#FD8D84] [&_p:nth-child(3)_strong]:text-[#C856C7] [&_p:nth-child(4)_strong]:text-[#09B1FB] [&_p:nth-child(5)_strong]:text-[#FD8D84] [&_p:nth-child(6)_strong]:text-[#C856C7] [&_strong]:font-[900]'
                  )}
                </div>
              )}
            </div>
          </div>
        </section>
      )}

      {leadership_team.enable === true && (
        <section className="py-24" id="team">
          <div className="container">
            <div className="row">
              <div className="col-12 mb-16">
                <div className="text-center">
                  <div data-aos="fade-up-sm">
                    {markdownify(leadership_team.title, 'h2', 'font-bold mb-4')}
                  </div>
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    {markdownify(
                      leadership_team.quote,
                      'p',
                      'text-secondary-800 font-secondary mt-6 text-3xl -rotate-1'
                    )}
                  </div>
                </div>
              </div>

              {leadership_team.lists.map((item, index) => (
                <div key={index} className="mb-10 sm:col-6 md:col-4 lg:col-3">
                  <div
                    className="rounded-3xl rounded-tl-none bg-dark-quaternary"
                    data-aos="fade-up-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      height={300}
                      width={300}
                      className="w-full rounded-3xl rounded-tl-none"
                    />
                    <div className="py-6 text-center">
                      <p className="mb-2 text-xl font-bold leading-snug md:text-2xl">
                        {item.name}
                      </p>
                      <p className="block font-light leading-relaxed">
                        {item.designation}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
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
                      'h2',
                      'text-5xl lg:text-6xl font-semibold mb-6 bg-gradient-text text-transparent bg-clip-text leading-[1.2]'
                    )}
                  </div>
                  <div
                    className="hidden space-x-3 md:flex"
                    data-aos="fade-up-sm"
                    data-aos-delay="50">
                    {social_media.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-quaternary transition-all hover:bg-slate-800"
                        target="_blank">
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
                  <div
                    key={index}
                    className="mb-6 rounded-3xl bg-dark-quaternary p-8"
                    data-aos="fade-up-sm">
                    <p className="mb-3 text-2xl">{item.title}</p>
                    <p className="mb-1 font-bold">{item.name}</p>
                    {markdownify(
                      item.email,
                      'p',
                      'text-light [&_a]:underline decoration-[#ddd] hover:decoration-primary hover:text-primary transition-all'
                    )}
                  </div>
                ))}

                <div className="mt-10 block text-center md:hidden">
                  <div className="flex justify-center space-x-3">
                    {social_media.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-dark-quaternary transition-all hover:bg-slate-800"
                        target="_blank">
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
  );
};

export default aboutUs;

export const getStaticProps = async () => {
  const about = await getListPage('content/about-us/_index.md');

  return {
    props: {
      about: about,
    },
  };
};
