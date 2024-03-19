import Base from "@layouts/Baseof";
import { getListPage } from "@lib/contentParser";
import Advisory from "@partials/Advisory";
import AdvisoryGame from "@partials/AdvisoryGame";
import AdvisoryTeam from "@partials/AdvisoryTeam";
import Banner from "@partials/Banner";
import Faq from "@partials/Faq";
import GoSupernova from "@partials/GoSupernova";
import HowItWorks from "@partials/HowItWorks";
import JoinCommunity from "@partials/JoinCommunity";
import Superstars from "@partials/Superstars";
import Testimonials from "@partials/Testimonials";
import TopFounders from "@partials/TopFounders";

const Home = ({
  homepage,
  testimonials_page,
  superstars_page,
  top_founders_page,
  how_it_works_page,
  advisory_team_page,
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
      <AdvisoryGame advisory_game={advisory_game} />
      <Superstars superstars={superstars_page} />
      <AdvisoryTeam advisory_team={advisory_team_page} />
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
  const homepage = await getListPage("content/_index.md");
  const testimonials = await getListPage("content/sections/testimonials.md");
  const superstars = await getListPage("content/sections/superstars.md");
  const top_founders = await getListPage("content/sections/top-founders.md");
  const how_it_works = await getListPage("content/sections/how-it-works.md");
  const advisory_team = await getListPage("content/sections/advisory-team.md");
  const go_supernova = await getListPage("content/sections/go-supernova.md");
  const join_community = await getListPage(
    "content/sections/join-community.md"
  );
  const faq = await getListPage("content/sections/faq.md");

  return {
    props: {
      homepage: homepage,
      testimonials_page: testimonials,
      superstars_page: superstars,
      top_founders_page: top_founders,
      how_it_works_page: how_it_works,
      advisory_team_page: advisory_team,
      go_supernova_page: go_supernova,
      join_community_page: join_community,
      faq_page: faq,
    },
  };
};

