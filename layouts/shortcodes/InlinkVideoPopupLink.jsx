import ReactPlayerWrapperV2 from '@components/ReactPlayerWrapperV2';
import PortalModal from '@layouts/helpers/PortalModal';
import { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';

const InlineTextVideoPopup = ({ label, full_link }) => {
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
    <>
      <span onClick={handleOpenVideoPopup}>{label}</span>
      {isVideoPopupOpen && (
        <PortalModal>
          <PortalModal.Close handleClose={handleCloseVideoModal} />
          <div className="mx-auto w-[800px]" ref={videoPopupRef}>
            <ReactPlayerWrapperV2 url={full_link} autoplay={true} />
          </div>
        </PortalModal>
      )}
    </>
  );
};

export default InlineTextVideoPopup;
