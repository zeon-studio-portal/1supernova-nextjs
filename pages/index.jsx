import Base from '@layouts/Baseof';
import { getListPage } from '@lib/contentParser';
import Advisory from '@partials/Advisory';
import AdvisoryGame from '@partials/AdvisoryGame';
import ApplySteps from '@partials/ApplySteps';
import Banner from '@partials/Banner';
import Faq from '@partials/Faq';
import GoSupernova from '@partials/GoSupernova';
import HowItWorks from '@partials/HowItWorks';
import JoinCommunity from '@partials/JoinCommunity';
import JoinSteps from '@partials/JoinSteps';
import JoinSupernovaNetwork from '@partials/JoinSupernovaNetwork';
import Mission from '@partials/Mission';
import Superstars from '@partials/Superstars';
import Testimonials from '@partials/Testimonials';
import TopFounders from '@partials/TopFounders';
import TrustedBrands from '@partials/TrustedBrands';
// import UploadAndApply from '@partials/UploadAndApply';
import WhySupernovaExists from '@partials/WhySupernovaExists';

const Home = ({
  homepage,
  join_the_supernova_network,
  // upload_and_apply,
  apply_steps,
  why_supernova_exists,
  testimonials_page,
  mission,
  advisory,
  advisory_game,
  trusted_brands,
  superstars_page,
  top_founders_page,
  how_it_works_page,
  join_steps_page,
  go_supernova_page,
  join_community_page,
  faq_page,
}) => {
  const { banner } = homepage.frontmatter;

  return (
    <Base>
      <Banner banner={banner} founders={banner.founders} />
      <Advisory advisory={advisory.frontmatter} />
      {/* The Supernova Advantage: join_the_supernova_network */}
      <JoinSupernovaNetwork data={join_the_supernova_network.frontmatter} />
      <JoinSteps join_steps={join_steps_page} />
      {/* <UploadAndApply data={upload_and_apply.frontmatter} /> */}
      <ApplySteps data={apply_steps.frontmatter} />
      <HowItWorks how_it_works={how_it_works_page} />
      <Testimonials testimonials={testimonials_page} />
      <Mission mission={mission} />
      <AdvisoryGame advisory_game={advisory_game.frontmatter} />
      <TopFounders top_founders={top_founders_page} />
      <TrustedBrands trusted_brands={trusted_brands} />
      <Superstars superstars={superstars_page} />
      <GoSupernova go_supernova={go_supernova_page} />
      <JoinCommunity join_community={join_community_page} />
      <WhySupernovaExists data={why_supernova_exists.frontmatter} />
      <Faq faq={faq_page} />
    </Base>
  );
};

export default Home;

// for homepage data
export const getStaticProps = async () => {
  const homepage = await getListPage('content/_index.md');
  const join_the_supernova_network = await getListPage(
    'content/sections/join_the_supernova_network.md'
  );
  const apply_steps = await getListPage('content/sections/apply-steps.md');
  const why_supernova_exists = await getListPage(
    'content/sections/why-supernova-exists.md'
  );
  const testimonials = await getListPage('content/sections/testimonials.md');
  const advisory = await getListPage('content/sections/advisory.md');
  const advisory_game = await getListPage('content/sections/advisory-game.md');
  const mission = await getListPage('content/sections/mission.md');
  const trustedBrands = await getListPage('content/sections/trusted-brands.md');
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
      join_the_supernova_network: join_the_supernova_network,
      // upload_and_apply: upload_and_apply,
      apply_steps: apply_steps,
      why_supernova_exists: why_supernova_exists,

      testimonials_page: testimonials,
      mission: mission,
      trusted_brands: trustedBrands,
      superstars_page: superstars,
      top_founders_page: top_founders,
      how_it_works_page: how_it_works,
      join_steps_page: join_steps,
      go_supernova_page: go_supernova,
      join_community_page: join_community,
      advisory: advisory,
      advisory_game: advisory_game,
      faq_page: faq,
    },
  };
};
