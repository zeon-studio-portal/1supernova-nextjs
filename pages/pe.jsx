import Base from '@layouts/Baseof';
import { getListPage } from '@lib/contentParser';
import Banner from '@partials/pe/Banner';
import MarketReality from '@partials/pe/MarketReality';
import Difference from '@partials/pe/Difference';
import React from 'react';
import MostValue from '@partials/pe/MostValue';
import WhySupernova from '@partials/pe/WhySupernova';
import CallToAction from '@partials/pe/CallToAction';
import OperatingAlpha from '@partials/pe/OperatingAlpha';

const PE = ({ pe }) => {
  const {
    title,
    description,
    banner,
    the_market_reality,
    the_difference,
    most_value,
    why_supernova,
    operating_alpha,
    call_to_action,
  } = pe.frontmatter;

  return (
    <Base title={title} description={description}>
      <Banner banner={banner} />
      <MarketReality data={the_market_reality} />
      <Difference data={the_difference} />
      <MostValue data={most_value} />
      <WhySupernova data={why_supernova} />
      <OperatingAlpha data={operating_alpha} />
      <CallToAction cta={call_to_action} />
    </Base>
  );
};

export default PE;

export const getStaticProps = async () => {
  const pe = await getListPage('content/pe/_index.md');

  return {
    props: {
      pe: pe,
    },
  };
};
