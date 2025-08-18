import AnimatedText from '@components/AnimatedText';
import ReactPlayerWrapperV2 from '@components/ReactPlayerWrapperV2';
import PortalModal from '@layouts/helpers/PortalModal';
import { markdownify } from '@lib/utils/textConverter';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import FounderCard from '@components/FounderCard';

const TopFounders = ({ top_founders }) => {
  const handleOpenVideoPopup = () => {
    setIsVideoPopupOpen(true);
  };
  const handleCloseVideoModal = () => {
    setIsVideoPopupOpen(false);
  };
  const videoPopupRef = useRef(null);
  const [isVideoPopupOpen, setIsVideoPopupOpen] = useState(false);
  useOnClickOutside(videoPopupRef, handleCloseVideoModal);

  return (
    top_founders.frontmatter.enable === true && (
      <>
        <section id="portfolio" className="rising-stars bg-dark-secondary py-24">
          <div className="container ">
            <div data-aos="fade-up-sm">
              <AnimatedText
                tag="h2"
                className="mb-4 font-medium text-center"
                content={top_founders.frontmatter.title}
              />
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(
                top_founders.frontmatter.subtitle,
                'p',
                'text-light-secondary md:text-xl text-center'
              )}
            </div>

            {/* Swiper Slide for Top Founders */}
            <Swiper
              className="mt-20 rising-stars"
              modules={[ Pagination, Autoplay]}
              pagination={{ clickable: true }}
              loop={true}
              autoplay={{
                delay: 4000,
                disableOnInteraction: false,
              }}
              loopedSlides={2}
              centeredSlides={true}
              spaceBetween={20}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                767: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                991: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                1280: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
              }}
             >
              {top_founders.frontmatter.lists.map((item, index) => (
                <SwiperSlide key={index}>
                  <FounderCard
                    item={item}
                    index={index}
                    handleOpenVideoPopup={handleOpenVideoPopup}
                  />
                  {isVideoPopupOpen && item.video_link_button.enable && (
                    <PortalModal>
                      <PortalModal.Close handleClose={handleCloseVideoModal} />
                      <div className="mx-auto w-[800px]" ref={videoPopupRef}>
                        <ReactPlayerWrapperV2
                          url={item.video_link_button.full_link}
                          autoplay={true}
                        />
                      </div>
                    </PortalModal>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>

            {/* <div className="mt-20 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-4">
              {top_founders.frontmatter.lists.map((item, index) => (
                <React.Fragment key={index}>
                  <div
                    key={index}
                    className="flex flex-col items-center"
                    data-aos="fade-up-sm"
                    data-aos-delay={(index - 0.5) * 100}>
                    <div className="group relative overflow-hidden rounded-b-3xl rounded-t-3xl bg-[#2D2D2D]">
                      {item.case_study_link !== '#' &&
                        item.case_study_link !== '' && (
                          <div className="absolute inset-0 bg-dark-primary/10 opacity-0 backdrop-blur-md transition-all duration-300 group-hover:opacity-100">
                            <div className="flex size-full flex-col items-center justify-center">
                              <p className="text-lg font-semibold text-white">
                                {item.name}
                              </p>
                              <span className="block text-[16px] text-white">
                                {item.designation}
                              </span>
                              {item.case_study_link &&
                                item.case_study_link !== '#' && (
                                  <a
                                    href={item.case_study_link}
                                    className="btn-sm mt-10 rounded-xl bg-primary-600 text-sm font-medium transition-colors duration-300 hover:bg-primary-800">
                                    Read Case Study
                                  </a>
                                )}
                            </div>
                          </div>
                        )}
                      <Image
                        className="h-auto w-full max-w-full rounded-b-3xl rounded-t-3xl"
                        src={item.image}
                        alt={item.name}
                        width={160}
                        height={160}
                      />
                      <div className="px-2 py-5 sm:px-4">
                        <p className="mb-2 text-lg font-semibold leading-snug sm:text-xl">
                          {item.name}
                        </p>
                        <span className="block text-[16px] leading-snug">
                          {item.designation}
                        </span>
                      </div>
                    </div>

                    <div className="relative mx-auto mt-6 flex h-[55px] w-full max-w-[170px] items-center">
                      <Image
                        width={item.brand_logo.width}
                        height={item.brand_logo.height}
                        className="mx-auto"
                        src={item.brand_logo.file}
                        alt={item.name}
                      />
                    </div>
                    {item.description && (
                      <div className="mt-4 px-2 text-[15px] text-light-quaternary">
                        {item.description}
                      </div>
                    )}

                    {item.case_study_link && item.case_study_link !== '#' && (
                      <a
                        href={item.case_study_link}
                        className="btn-sm mt-4 rounded-xl bg-primary-600 text-sm font-medium transition-colors duration-300 hover:bg-primary-800">
                        Read Case Study
                      </a>
                    )}
                    {item.video_link_button &&
                      item.video_link_button.enable && (
                        <button
                          onClick={handleOpenVideoPopup}
                          className="btn-sm mt-4 rounded-xl bg-primary-600 text-sm font-medium transition-colors duration-300 hover:bg-primary-800">
                          {item.video_link_button.label}
                        </button>
                      )}
                  </div>
                  {isVideoPopupOpen && item.video_link_button.enable && (
                    <PortalModal>
                      <PortalModal.Close handleClose={handleCloseVideoModal} />
                      <div className="mx-auto w-[800px]" ref={videoPopupRef}>
                        <ReactPlayerWrapperV2
                          url={item.video_link_button.full_link}
                          autoplay={true}
                        />
                      </div>
                    </PortalModal>
                  )}
                </React.Fragment>
              ))}
            </div> */}
          </div>
        </section>
      </>
    )
  );
};

export default TopFounders;
