import { markdownify } from "@lib/utils/textConverter";
import Image from "next/image";

const AdvisoryGame = ({ advisory_game }) => {
  return (
    advisory_game.enable === true && (
      <section className="bg-dark-secondary pt-24 md:pb-6 lg:pb-10">
        <div className="container">
          {markdownify(
            advisory_game.quote,
            "p",
            "text-white font-secondary mb-10 text-2xl -rotate-2"
          )}

          <div className="sm:pl-12">
            {markdownify(
              advisory_game.title,
              "h2",
              "font-bold mb-6 max-w-xl text-5xl md:text-6xl lg:text-7xl bg-gradient-text inline-block text-transparent bg-clip-text"
            )}
            {markdownify(
              advisory_game.subtitle,
              "p",
              "text-light-secondary font-lg max-w-sm"
            )}
          </div>

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
      </section>
    )
  );
};

export default AdvisoryGame;
