import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const VideoBG = ({ background_youtube_video_id }) => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Set a delay based on the page load time
      setTimeout(() => {
        setIsVideoLoaded(true);
      }, 100);
    };

    // Check if the page is already loaded
    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad);
  }, []);

  return isVideoLoaded ? (
    <iframe
      loading="lazy"
      title="background video"
      src={`https://www.youtube.com/embed/${background_youtube_video_id}?playlist=${background_youtube_video_id}&autoplay=1&mute=1&loop=1&color=white&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&enablejsapi=1&start=34`}></iframe>
  ) : (
    <Image
      className="h-full object-cover object-top aspect-[1/3] sm:aspect-auto"
      src={`/images/banner-bg.png`}
      alt="video thumbnail"
      width={1920}
      height={1080}
    />
  );
};

export default VideoBG;
