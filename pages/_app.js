import config from "@config/config.json";
import AOS from "aos";
import { useEffect } from "react";
import TagManager from "react-gtm-module";
import "styles/main.scss";

// load fonts from local
import localFont from "next/font/local";
const pptelegraf = localFont({
  src: [
    {
      path: "../public/fonts/pptelegraf-regular-webfont.woff2",
      weight: "400",
    },
    {
      path: "../public/fonts/pptelegraf-medium-webfont.woff2",
      weight: "500",
    },
    {
      path: "../public/fonts/pptelegraf-semibold-webfont.woff2",
      weight: "600",
    },
    {
      path: "../public/fonts/pptelegraf-bold-webfont.woff2",
      weight: "700",
    },
    {
      path: "../public/fonts/pptelegraf-ultrabold-webfont.woff2",
      weight: "800",
    },
    {
      path: "../public/fonts/pptelegraf-black-webfont.woff2",
      weight: "900",
    },
  ],
  variable: "--font-primary",
});

// load fonts from google
import { Caveat } from "next/font/google";
const caveat = Caveat({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-secondary",
});

// AOS
import "aos/dist/aos.css";

const App = ({ Component, pageProps }) => {
  // google tag manager (gtm)
  const tagManagerArgs = {
    gtmId: config.params.tag_manager_id,
  };
  useEffect(() => {
    setTimeout(() => {
      process.env.NODE_ENV === "production" &&
        config.params.tag_manager_id &&
        TagManager.initialize(tagManagerArgs);
    }, 5000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: false,
      offset: 50,
    });
  }, []);

  return (
    <div className={`${pptelegraf.variable} ${caveat.variable} font-primary`}>
      <Component {...pageProps} />
    </div>
  );
};

export default App;
