import AnimatedText from '@components/AnimatedText';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import { useState } from 'react';

const UploadAndApply = ({ data }) => {
  const { enable, title, subtitle, background_image, form, card_list } = data;
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [deckLink, setDeckLink] = useState('');
  const [loader, setLoader] = useState(false);

  const reset = () => {
    setLoader(false);
    setDeckLink('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    const formData = new FormData(e.target);
    const deckLink = formData.get('deck-link');
    setDeckLink(deckLink);

    fetch(form.formActionUrl, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        _subject: `1SuperNova Deck Submission`,
        deck_link: deckLink,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setSubmitted(data.success);
        reset();
      })
      .catch((error) => {
        console.log(error.message);
        setError(true);
      })
      .finally(() => {
        setLoader(false);
      });
  };

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

          <div className="mx-auto mt-20 lg:col-10" data-aos="fade-up-sm">
            <form
              onSubmit={handleSubmit}
              method="POST"
              className="flex h-[300px] flex-col items-center justify-center rounded-lg border border-secondary/40 bg-dark-primary/20 p-6 backdrop-blur-md">
              <Image
                src="/images/icons/upload.svg"
                alt="Upload Icon"
                className="mb-4 h-12 w-12"
                width={48}
                height={48}
              />
              <input
                type="url"
                name="deck-link"
                value={deckLink}
                onChange={(e) => setDeckLink(e.target.value)}
                placeholder={form.placeholder}
                className="mx-auto h-12 w-full rounded-lg border border-secondary/60 bg-dark-primary/20 text-center text-lg text-light-tertiary placeholder:text-light-tertiary focus:border-secondary-600 focus:ring-secondary-600 lg:w-2/3 "
                required
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
              />
              {/* Success Message */}
              {submitted && (
                <div className="mt-4 text-lg text-green-500">
                  {form.successMessage}
                </div>
              )}
              {/* Error Message */}
              {error && (
                <div className="mt-4 text-lg text-red-500">
                  {form.errorMessage}
                </div>
              )}
              {/* Loader */}
              <button
                type="submit"
                disabled={loader}
                className={
                  'mt-10 rounded-xl bg-secondary-600 px-5 py-3 text-dark-primary'
                }>
                {loader ? (
                  <div className="flex items-center gap-3">
                    Please wait
                    <div role="status">
                      <svg
                        aria-hidden="true"
                        class="h-6 w-6 animate-spin fill-sky-600 text-gray-200 dark:text-gray-600"
                        viewBox="0 0 100 101"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                          fill="currentColor"
                        />
                        <path
                          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                          fill="currentFill"
                        />
                      </svg>
                      <span class="sr-only">Loading...</span>
                    </div>
                  </div>
                ) : (
                  <span>{form.button.label}</span>
                )}
              </button>
            </form>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
            {card_list.map((card, index) => (
              <div
                data-aos="fade-up-sm"
                data-aos-delay={index * 100}
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
