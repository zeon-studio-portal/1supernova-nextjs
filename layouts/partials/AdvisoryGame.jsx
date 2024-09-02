import AnimatedText from '@components/AnimatedText';
import { markdownify } from '@lib/utils/textConverter';
import Image from 'next/image';

const AdvisoryGame = ({ advisory_game }) => {
  return (
    advisory_game.enable === true && (
      <section className="bg-dark-secondary pb-10 pt-24 md:pb-6 lg:pb-10">
        <div className="container">
          <div className="relative z-30" data-aos="fade-up-sm">
            {markdownify(
              advisory_game.quote,
              'p',
              'text-white font-secondary mb-10 text-2xl -rotate-2'
            )}
          </div>

          <div className="relative z-30 sm:pl-12">
            <div data-aos="fade-up-sm" data-aos-delay="100">
              {markdownify(
                advisory_game.title,
                'h2',
                'font-bold mb-6 max-w-xl text-5xl md:text-6xl lg:text-7xl bg-gradient-text inline-block text-transparent bg-clip-text'
              )}
            </div>
            <div data-aos="fade-up-sm" data-aos-delay="200">
              {markdownify(
                advisory_game.subtitle,
                'p',
                'text-light-secondary font-lg max-w-sm md:text-xl'
              )}
            </div>
          </div>

          <div
            data-aos
            data-aos-delay="300"
            data-aos-offset="300"
            className="group relative">
            <div className="absolute right-0 top-0 h-full w-full bg-dark-secondary transition-all duration-1000 group-[.aos-animate]:w-0"></div>
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
