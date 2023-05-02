import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";
import { useEffect, useState } from "react";
import ReactPlayer from "react-player";

const GoSupernova = ({ go_supernova }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    go_supernova.frontmatter.enable === true && (
      <section className="overflow-hidden py-24">
        <div className="container">
          <div className="mb-20 text-center">
            {markdownify(
              go_supernova.frontmatter.title,
              "h2",
              "font-medium mb-4"
            )}
            {markdownify(
              go_supernova.frontmatter.subtitle,
              "p",
              "text-secondary-800 font-secondary text-2xl -rotate-1"
            )}
          </div>

          {!loading && (
            <div className="relative">
              <div className="-z-10 hidden sm:block">
                <Image
                  src="/images/chakra-4.svg"
                  alt="supernova"
                  width={63}
                  height={62}
                  className="absolute -left-28 top-[25%] hidden md:block"
                />
                <Image
                  src="/images/chakra-3.svg"
                  alt="supernova"
                  width={262}
                  height={256}
                  className="absolute -left-[145px] bottom-0 scale-50 md:bottom-16 md:scale-100"
                />
              </div>
              <div className="player-wrapper relative z-10">
                <ReactPlayer
                  url={go_supernova.frontmatter.video_url}
                  controls
                />
              </div>
              <div className="-z-10 hidden sm:block">
                <Image
                  src="/images/chakra-3.svg"
                  alt="supernova"
                  width={262}
                  height={256}
                  className="absolute -right-[165px] top-16 hidden rotate-12 md:block"
                />
                <Image
                  src="/images/chakra-4.svg"
                  alt="supernova"
                  width={63}
                  height={62}
                  className="absolute -right-20 -top-[15%]"
                />
              </div>
            </div>
          )}

          <div className="go-supernova">
            <div className="mt-16 rounded-2xl bg-dark-quaternary px-16 py-12">
              <div className="row space-y-12 md:space-y-0">
                {go_supernova.frontmatter.features.map((feature, index) => (
                  <div key={index} className="text-center md:col-4">
                    <Image
                      src={feature.icon}
                      alt="supernova"
                      width={120}
                      height={120}
                      className="mx-auto mb-4"
                    />
                    {markdownify(feature.content, "div")}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            {markdownify(
              go_supernova.frontmatter.quote,
              "p",
              " bg-gradient-text text-transparent bg-clip-text font-secondary mt-20 text-3xl -rotate-1"
            )}
          </div>
        </div>
      </section>
    )
  );
};

export default GoSupernova;
