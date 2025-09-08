import ArrowButton from '@components/ArrowButton';
import ImageFallback from '@components/ImageFallback';
import config from '@config/config';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import 'node_modules/react-modal-video/scss/modal-video.scss';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import Founders from './Founders';
import VideoBG from './VideoBG';

const Banner = ({ banner, founders }) => {
  const [isOpen, setOpen] = useState(false);

  const { badge } = banner;

  return (
    <section className="relative overflow-hidden pb-16 pt-12 after:absolute after:inset-0 after:z-20 after:h-full after:w-full after:bg-dark-primary/70 after:content-[''] md:pt-8">
      <div className="relative z-30 flex flex-col justify-around gap-y-10 sm:min-h-[600px]">
        <div className="container relative z-50 text-center">
          {badge && badge.enable && (
            <div data-aos="fade-up-sm">
              <div className="mx-auto mb-6 flex max-w-max flex-wrap items-center justify-center gap-4 rounded-full">
                <div className="flex items-center">
                  {badge.images &&
                    badge.images.length &&
                    badge.images.map((image, index) => (
                      <ImageFallback
                        key={image}
                        width={60}
                        height={60}
                        className="bg-light border-1 relative -mr-2 aspect-square size-10 rounded-full bg-light-quaternary"
                        style={{ zIndex: `${index}` }}
                        src={image}
                        alt="Badge"
                      />
                    ))}
                </div>
                <span className="px-4 text-sm font-medium text-light-primary md:text-base">
                  {badge.label}
                </span>
              </div>
            </div>
          )}
          <div data-aos="fade-up">
            {markdownify(
              banner.title,
              'h1',
              'text-banner mx-auto mb-8 w-fit text-h3/tight md:text-h1 font-medium [&>strong]:!text-secondary-600'
            )}
          </div>
          <p className="sr-only">{config.metadata.meta_description}</p>
          <div data-aos="fade-up" data-aos-delay="50">
            {markdownify(
              banner.subtitle,
              'p',
              'sm:max-w-[600px] mx-auto mb-10 md:text-xl'
            )}
          </div>

          {banner.video_button.enable && (
            <div
              data-aos="fade-up"
              data-aos-delay="100"
              className="video-wrapper">
              <button
                className="video-play-btn"
                onClick={() => setOpen(true)}
                aria-label="Play Video">
                <span className="video-play-btn-icon">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="inline text-light-primary">
                    <path
                      d="M18.6278 14.7363L9.49228 19.9566C8.15896 20.7185 6.5 19.7558 6.5 18.2201V12.9998V7.77953C6.5 6.24389 8.15897 5.28115 9.49228 6.04305L18.6278 11.2634C19.9714 12.0311 19.9714 13.9685 18.6278 14.7363Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
              </button>
            </div>
          )}

          {banner.video_button.enable && (
            <ModalVideo
              channel="youtube"
              autoplay={1}
              isOpen={isOpen}
              videoId={banner.video_button.youtube_id}
              onClose={() => setOpen(false)}
            />
          )}

          {banner.quote && banner.quote.enable && (
            <div
              className="mx-auto mt-8 max-w-[400px]"
              data-aos="fade-up"
              data-aos-delay="150">
              {markdownify(
                banner.quote.title,
                'p',
                'text-light-quaternary opacity-80 max-w-[340px] mx-auto'
              )}
              <Swiper
                loop={true}
                modules={[Autoplay]}
                autoplay={{
                  delay: 1500,
                  disableOnInteraction: false,
                }}>
                {banner.quote.items.map((item, index) => (
                  <SwiperSlide key={index}>
                    {markdownify(
                      item,
                      'span',
                      'font-secondary text-3xl font-medium text-secondary-600'
                    )}
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {banner.button && banner.button.enable && (
            <ArrowButton
              label={banner.button.label}
              link={banner.button.link}
              data-aos="fade-up"
              data-aos-delay="150"
              className="mx-auto mt-10 rounded-xl bg-secondary-600 px-5 py-3 text-dark-primary"
            />
          )}
        </div>

        <Founders founders={founders} />

        <div
          className="banner-image banner-image-left -z-10"
          data-aos="fade-right"
          data-aos-delay="350">
          <Image
            src="/images/chakra.svg"
            alt="supernova"
            width={550}
            height={550}
          />
        </div>
        <div
          className="banner-image banner-image-right -z-10"
          data-aos="fade-left"
          data-aos-delay="350">
          <Image
            src="/images/chakra.svg"
            alt="supernova"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="video-background">
        <VideoBG
          background_youtube_video_id={banner.background_youtube_video_id}
        />
      </div>
    </section>
  );
};

export default Banner;
