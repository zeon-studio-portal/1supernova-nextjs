import settings from '@config/settings.json';
import AOS from 'aos';
import TagManager from 'react-gtm-module';
import 'styles/main.scss';
import React, { useEffect } from 'react';
import SplitText from '/plugins/js/splittext.min.js';
import gsap from '/plugins/js/gsap.min.js';
import ScrollTrigger from '/plugins/js/scrolltrigger.min.js';

// load fonts from local
import localFont from 'next/font/local';
const pptelegraf = localFont({
  src: [
    {
      path: '../public/fonts/pptelegraf-regular-webfont.woff2',
      weight: '400',
    },
    {
      path: '../public/fonts/pptelegraf-medium-webfont.woff2',
      weight: '500',
    },
    {
      path: '../public/fonts/pptelegraf-semibold-webfont.woff2',
      weight: '600',
    },
    {
      path: '../public/fonts/pptelegraf-bold-webfont.woff2',
      weight: '700',
    },
    {
      path: '../public/fonts/pptelegraf-ultrabold-webfont.woff2',
      weight: '800',
    },
    {
      path: '../public/fonts/pptelegraf-black-webfont.woff2',
      weight: '900',
    },
  ],
  variable: '--font-primary',
});

// load fonts from google
import { Caveat } from 'next/font/google';
const caveat = Caveat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-secondary',
});

// AOS
import 'aos/dist/aos.css';

const App = ({ Component, pageProps }) => {
  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: settings.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === 'production' &&
        settings.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false,
      offset: 50,
    });
  }, []);

  // Gsap Text Reveal Animation
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, SplitText);

    const split = new SplitText('.text > p', { type: 'lines' });

    split.lines.forEach((target) => {
      const isMultiline = target.parentElement.children.length > 1;
      const isBannerText =
        target.parentElement.parentElement.classList.contains(
          'text-banner'
        );

      const startValue = isMultiline
        ? 'top center'
        : isBannerText
          ? 'top 20%'
          : 'top 80%';
      const endValue = isMultiline
        ? 'bottom center'
        : isBannerText
          ? 'bottom 20%'
          : 'bottom 30%';

      // Create the animation using GSAP's default settings
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: target,
          start: startValue, // Dynamic start value based on conditions
          end: endValue, // Dynamic end value based on conditions
          scrub: 1,
          markers: false, // Optional: show markers for debugging
        },
      });
    });

    setTimeout(() => {
      ScrollTrigger.refresh();
    }, 1000);

    // Select all sections or relevant elements
    const sections = document.querySelectorAll('section'); // Adjust the selector if needed
    sections.forEach((section) => {
      // Check if the section is the first one (banner/above the fold)
      const isBanner = section.classList.contains('banner');

      ScrollTrigger.create({
        trigger: section,
        start: isBanner ? 'top top' : '100%+=100px center', // For banner, start animation as soon as the page loads
        onEnter: () => {
          ScrollTrigger.refresh(); // Trigger refresh when entering 100px before the section (or immediately for banner)
        },
        markers: false, // Optional: add markers for debugging
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      split.revert(); // Reverts SplitText to its original state
    };
  }, []);

  return (
    <div className={`${pptelegraf.variable} ${caveat.variable} font-primary`}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
