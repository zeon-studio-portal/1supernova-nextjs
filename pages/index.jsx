import Base from '@layouts/Baseof';
import { getListPage } from '@lib/contentParser';
import Advisory from '@partials/Advisory';
import AdvisoryGame from '@partials/AdvisoryGame';
import Banner from '@partials/Banner';
import Faq from '@partials/Faq';
import GoSupernova from '@partials/GoSupernova';
import HowItWorks from '@partials/HowItWorks';
import JoinCommunity from '@partials/JoinCommunity';
import JoinSteps from '@partials/JoinSteps';
import Mission from '@partials/Mission';
import Superstars from '@partials/Superstars';
import Testimonials from '@partials/Testimonials';
import TopFounders from '@partials/TopFounders';

const Home = ({
  homepage,
  testimonials_page,
  mission,
  superstars_page,
  top_founders_page,
  how_it_works_page,
  join_steps_page,
  go_supernova_page,
  join_community_page,
  faq_page,
}) => {
  const { banner, founders, advisory, advisory_game } = homepage.frontmatter;

  return (
    <Base>
      <Banner banner={banner} founders={founders} />
      <Advisory advisory={advisory} />
      <Testimonials testimonials={testimonials_page} />
      <Mission mission={mission} />
      <AdvisoryGame advisory_game={advisory_game} />
      <JoinSteps join_steps={join_steps_page} />
      <HowItWorks how_it_works={how_it_works_page} />
      <Superstars superstars={superstars_page} />
      <TopFounders top_founders={top_founders_page} />
      <GoSupernova go_supernova={go_supernova_page} />
      <JoinCommunity join_community={join_community_page} />
      <Faq faq={faq_page} />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage('content/_index.md');
  const testimonials = await getListPage('content/sections/testimonials.md');
  const mission = await getListPage('content/sections/mission.md');
  const superstars = await getListPage('content/sections/superstars.md');
  const top_founders = await getListPage('content/sections/top-founders.md');
  const how_it_works = await getListPage('content/sections/how-it-works.md');
  const join_steps = await getListPage('content/sections/join-steps.md');
  const go_supernova = await getListPage('content/sections/go-supernova.md');
  const join_community = await getListPage(
    'content/sections/join-community.md'
  );
  const faq = await getListPage('content/sections/faq.md');

  return {
    props: {
      homepage: homepage,
      testimonials_page: testimonials,
      mission: mission,
      superstars_page: superstars,
      top_founders_page: top_founders,
      how_it_works_page: how_it_works,
      join_steps_page: join_steps,
      go_supernova_page: go_supernova,
      join_community_page: join_community,
      faq_page: faq,
    },
  };
};
