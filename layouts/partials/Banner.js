import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import "node_modules/react-modal-video/scss/modal-video.scss";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import { Autoplay } from "swiper";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Founders from "./Founders";

const Banner = ({ banner, founders }) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden py-24">
      <div className="container relative z-50 text-center">
        <div data-aos="fade-up">
          {markdownify(
            banner.title,
            "h1",
            "text-7xl sm:text-8xl md:text-[120px] xl:text-[150px] leading-[0.75] font-medium mb-8"
          )}
        </div>
        <div data-aos="fade-up" data-aos-delay="50">
          {markdownify(banner.subtitle, "p", "sm:max-w-[400px] mx-auto mb-10")}
        </div>

        <button
          className="btn btn-border-gradient after:bg-dark-primary"
          onClick={() => setOpen(true)}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mr-1 inline text-light-primary"
          >
            <path
              d="M18.6278 14.7363L9.49228 19.9566C8.15896 20.7185 6.5 19.7558 6.5 18.2201V12.9998V7.77953C6.5 6.24389 8.15897 5.28115 9.49228 6.04305L18.6278 11.2634C19.9714 12.0311 19.9714 13.9685 18.6278 14.7363Z"
              fill="currentColor"
            />
          </svg>
          {banner.video_button.label}
        </button>

        <ModalVideo
          channel="youtube"
          autoplay={1}
          isOpen={isOpen}
          videoId={banner.video_button.youtube_id}
          onClose={() => setOpen(false)}
        />

        <div className="mt-16" data-aos="fade-up" data-aos-delay="150">
          {markdownify(
            banner.quote.title,
            "p",
            "text-[#6b6b6b] max-w-[340px] mx-auto"
          )}
          <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{
              delay: 1500,
              disableOnInteraction: false,
            }}
          >
            {banner.quote.items.map((item, index) => (
              <SwiperSlide key={index}>
                {markdownify(
                  item,
                  "span",
                  "font-secondary text-3xl font-medium text-secondary-600"
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <Founders founders={founders} />

      <div
        className="banner-image banner-image-left -z-10"
        data-aos="fade-right"
        data-aos-delay="350"
      >
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
        data-aos-delay="350"
      >
        <Image
          src="/images/chakra.svg"
          alt="supernova"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
};

export default Banner;
