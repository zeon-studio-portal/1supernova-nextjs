import AnimatedText from '@components/AnimatedText';
import ArrowButton from '@components/ArrowButton';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';

const UploadAndApply = ({ data }) => {
  const { enable, title, subtitle, background_image, form, card_list } = data;

  return (
    enable && (
      <section
        id="join_the_supernova_network"
        className=" before:to-bg-transparent relative isolate py-24 before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-b before:from-dark-primary"
        style={{
          backgroundImage: `url(${background_image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}>
        <div className="container mx-auto text-balance text-center lg:col-8">
          <div data-aos="fade-up-sm">
            <AnimatedText
              tag="h2"
              className="mb-4 font-medium"
              content={title}
            />
          </div>
          <div data-aos="fade-up-sm" data-aos-delay="100">
            {markdownify(subtitle, 'p', 'text-light-tertiary md:text-xl')}
          </div>

          <div className="mx-auto mt-20 lg:col-10">
            <form
              action={'#'}
              className="border-light flex h-[300px] flex-col items-center justify-center rounded-lg border bg-dark-primary/20 p-6 backdrop-blur-md">
              <Image
                src="/images/icons/upload.svg"
                alt="Upload Icon"
                className="mb-4 h-12 w-12"
                width={48}
                height={48}
              />

              <input
                type="text"
                placeholder={form.placeholder}
                className="mx-auto h-12 w-full rounded-lg border border-secondary/60 bg-dark-primary/20 text-center text-lg text-light-tertiary placeholder:text-light-tertiary focus:border-secondary-600 focus:ring-secondary-600 lg:w-2/3 "
              />

              <ArrowButton
                link={form.button.link}
                label={form.button.label}
                className={
                  'mt-10 rounded-xl bg-secondary-600 px-5 py-3 text-dark-primary'
                }
              />
            </form>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {card_list.map((card, index) => (
              <div
                key={index}
                className="flex items-start gap-4 rounded-lg bg-dark-quaternary/90 p-4 text-start text-lg backdrop-blur-md">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className=" min-h-6 min-w-[1lh]"
                  xmlns="http://www.w3.org/2000/svg">
                  <mask
                    id="mask0_1455_3981"
                    style={{ maskType: 'luminance' }}
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="1"
                    width="22"
                    height="22">
                    <path
                      d="M12 22C13.3135 22.0016 14.6143 21.7437 15.8278 21.2411C17.0412 20.7384 18.1434 20.0009 19.071 19.071C20.0009 18.1434 20.7384 17.0412 21.2411 15.8278C21.7437 14.6143 22.0016 13.3135 22 12C22.0016 10.6866 21.7437 9.38572 21.2411 8.17225C20.7384 6.95878 20.0009 5.85659 19.071 4.92901C18.1434 3.99909 17.0412 3.26162 15.8278 2.75897C14.6143 2.25631 13.3135 1.99839 12 2.00001C10.6866 1.99839 9.38572 2.25631 8.17225 2.75897C6.95878 3.26162 5.85659 3.99909 4.92901 4.92901C3.99909 5.85659 3.26162 6.95878 2.75897 8.17225C2.25631 9.38572 1.99839 10.6866 2.00001 12C1.99839 13.3135 2.25631 14.6143 2.75897 15.8278C3.26162 17.0412 3.99909 18.1434 4.92901 19.071C5.85659 20.0009 6.95878 20.7384 8.17225 21.2411C9.38572 21.7437 10.6866 22.0016 12 22Z"
                      fill="white"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12L11 15L17 9"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </mask>
                  <g mask="url(#mask0_1455_3981)">
                    <path
                      d="M0 0H24V24H0V0Z"
                      fill="url(#paint0_linear_1455_3981)"
                    />
                  </g>
                  <defs>
                    <linearGradient
                      id="paint0_linear_1455_3981"
                      x1="-1.58647"
                      y1="-3.96616"
                      x2="33.1895"
                      y2="15.6812"
                      gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0AA5FE" />
                      <stop offset="0.255208" stopColor="#02DDEB" />
                      <stop offset="0.46875" stopColor="#FDD13B" />
                      <stop offset="0.729167" stopColor="#FF8F81" />
                      <stop offset="1" stopColor="#C14ECF" />
                    </linearGradient>
                  </defs>
                </svg>
                {card.title}
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default UploadAndApply;
