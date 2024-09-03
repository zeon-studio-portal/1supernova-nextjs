import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const VideoBG = ({ background_youtube_video_id }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVideoLoaded(true);
    }, 1000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <div onClick={() => setIsVideoLoaded(true)}>
      {isVideoLoaded ? (
        <iframe
          loading="lazy"
          title="background video"
          src={`https://www.youtube.com/embed/${background_youtube_video_id}?playlist=${background_youtube_video_id}&autoplay=1&mute=1&loop=1&color=white&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&start=34`}></iframe>
      ) : (
        <Image
          className="object-cover object-top"
          src={`/images/banner-bg.png`}
          alt="video thumbnail"
          width={1920}
          height={200}
        />
      )}
    </div>
  );
};

export default VideoBG;
