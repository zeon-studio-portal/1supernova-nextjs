import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const AdvisoryGame = ({ advisory_game }) => {
  return (
    advisory_game.enable === true && (
      <section className="bg-dark-secondary pt-24 pb-10 md:pb-6 lg:pb-10">
        <div className="container">
          <div className="relative z-30" data-aos="fade-up-sm">
            {markdownify(
              advisory_game.quote,
              "p",
              "text-white font-secondary mb-10 text-2xl -rotate-2"
            )}
          </div>

          <div className="sm:pl-12 relative z-30">
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(
                advisory_game.title,
                "h2",
                "font-bold mb-6 max-w-xl text-5xl md:text-6xl lg:text-7xl bg-gradient-text inline-block text-transparent bg-clip-text"
              )}
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="200">
              {markdownify(
                advisory_game.subtitle,
                "p",
                "text-light-secondary font-lg max-w-sm"
              )}
            </div>
          </div>

          <div data-aos data-aos-delay="300" data-aos-offset="300" className="group relative">
            <div className="bg-dark-secondary absolute top-0 right-0 h-full w-full group-[.aos-animate]:w-0 transition-all duration-1000"></div>
            <Image
              src={advisory_game.nps_score}
              alt="nps score"
              width={995}
              height={564}
              className="pointer-events-none hidden select-none sm:block md:-mt-56 lg:-mt-72"
            />
            <Image
              src={advisory_game.nps_score_mobile}
              alt="nps score"
              width={327}
              height={488}
              className="pointer-events-none mt-10 block w-full select-none px-4 sm:hidden"
            />
          </div>
        </div>
      </section>
    )
  );
};

export default AdvisoryGame;
