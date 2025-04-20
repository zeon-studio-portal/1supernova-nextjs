import Base from '@layouts/Baseof';
import { getListPage } from '@lib/contentParser';
import Banner from '@partials/Banner';
import Faq from '@partials/Faq';
import GoSupernova from '@partials/GoSupernova';
import HowItWorks from '@partials/HowItWorks';
import HowItWorksAboutPage from '@partials/HowItWorksAboutPage';
import JoinCommunity from '@partials/JoinCommunity';
import JoinSteps from '@partials/JoinSteps';
import JoinSupernovaNetwork from '@partials/JoinSupernovaNetwork';
import Mission from '@partials/Mission';
import PathsToSuccess from '@partials/PathsToSuccess';
import TopFounders from '@partials/TopFounders';
import UploadAndApply from '@partials/UploadAndApply';
import WhoCanApply from '@partials/WhoCanApply';
import WhyChooseSupernova from '@partials/WhyChooseSupernova';

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
  const {
    banner,
    join_the_supernova_network,
    upload_and_apply,
    unlock_access,
    who_should_apply,
    paths_to_success,
    why_choose_supernova,
    founders,
    advisory,
    advisory_game,
  } = homepage.frontmatter;

  return (
    <Base>
      <Banner banner={banner} founders={banner.founders} />

      {/* The Supernova Advantage: join_the_supernova_network */}
      <JoinSupernovaNetwork data={join_the_supernova_network} />

      {/* Upload Your Pitch Deck Here */}
      <UploadAndApply data={upload_and_apply} />

      {/* Unlock Access */}
      <HowItWorksAboutPage data={unlock_access} />

      {/* Who Should Apply? */}
      <WhoCanApply data={who_should_apply} />

      {/* Your Path to Supernova Success */}
      <PathsToSuccess data={paths_to_success} />

      {/* Why Founders Choose Supernova */}
      <WhyChooseSupernova data={why_choose_supernova} />

      {/* Read Case Study */}
      {/* <CaseStudyFeatured data={top_founders_page} /> */}

      {/* CTA */}

      {/* Why Supernova Exists */}

      {/* FAQ */}
      <Mission mission={mission} />
      {/* <AdvisoryGame advisory_game={advisory_game} /> */}
      <JoinSteps join_steps={join_steps_page} />
      <HowItWorks how_it_works={how_it_works_page} />
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
  const homepage = await getListPage('content/apply/_index.md');
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
