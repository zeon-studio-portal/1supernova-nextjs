import ArrowButton from '@components/ArrowButton';
import PlayButton from '@components/PlayButton';
import ReactPlayerWrapperV2 from '@components/ReactPlayerWrapperV2';
import PortalModal from '@layouts/helpers/PortalModal';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';
import { useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { useOnClickOutside } from 'usehooks-ts';

const JoinSupernovaNetwork = ({ data }) => {
  const [isParagraphExtended, setIsParagraphExtended] = useState(false);

  const {
    enable,
    main_image,
    main_image_play_button,
    comparison_image,
    title,
    subtitle,
    description,
    button,
    testimonial,
  } = data;

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
    enable === true && (
      <>
        <section id="join_the_supernova_network" className="bg-primary py-24">
          <div className="container">
            <div className="row items-start max-lg:gy-5">
              <div className="lg:col-6">
                <div className="flex flex-col gap-y-8 lg:gap-y-16 lg:pe-10">
                  <div>
                    <div data-aos="fade-up-sm">
                      {markdownify(
                        subtitle,
                        'p',
                        `[&>strong]:text-yellow-300 mb-8 `
                      )}
                    </div>
                  )}
                  <div data-aos="fade-up-sm" data-aos-delay="100">
                    {markdownify(
                      description,
                      'p',
                      `text-slate-100 text-base ${isParagraphExtended ? 'h-auto' : 'max-xl:h-[200px] overflow-hidden'}`
                    )}
                    <button
                      className="mt-2 hidden text-base text-yellow-400 max-xl:block"
                      onClick={() =>
                        setIsParagraphExtended(!isParagraphExtended)
                      }>
                      {isParagraphExtended ? 'Read Less' : 'Read More...'}
                    </button>
                  </div>
                  {button && button.enable && (
                    <div data-aos="fade-up-sm">
                      <ArrowButton
                        link={button.link}
                        label={button.label}
                        className={
                          'mt-8 rounded-xl bg-secondary-600 px-5 py-3 text-dark-primary'
                        }
                      />
                    </div>
                  )}
                  {testimonial && (
                    <div
                      className=""
                      data-aos="fade-up-sm"
                      data-aos-delay={300}>
                      {testimonial.content && (
                        <div className="">
                          {markdownify(
                            testimonial.content,
                            'p',
                            'text-lg text-slate-100'
                          )}
                        </div>
                      )}
                      <div className=" mt-6 flex items-center gap-4">
                        {testimonial.customer_avatar && (
                          <Image
                            className="h-14 w-14 rounded-full"
                            src={testimonial.customer_avatar}
                            width={56}
                            height={56}
                            alt={testimonial.customer_name}
                          />
                        )}
                        <div>
                          {testimonial.customer_name && (
                            <div className="mb-1.5 text-lg ">
                              {markdownify(
                                testimonial.customer_name,
                                'p',
                                'text-lg text-slate-100'
                              )}
                            </div>
                          )}
                          {testimonial.customer_profession && (
                            <div className="uppercase">
                              {markdownify(
                                testimonial.customer_profession,
                                'p',
                                'uppercase text-base-sm text-slate-100'
                              )}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
        {isVideoPopupOpen && main_image_play_button.enable && (
          <PortalModal>
            <PortalModal.Close handleClose={handleCloseVideoModal} />
            <div className="mx-auto w-[1200px]" ref={videoPopupRef}>
              <ReactPlayerWrapperV2
                url={main_image_play_button.full_link}
                autoplay={true}
              />
            </div>
          </PortalModal>
        )}
      </>
    )
  );
};

export default JoinSupernovaNetwork;
