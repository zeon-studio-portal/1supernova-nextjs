import Base from '@layouts/Baseof';
import { getListPage, getSinglePage } from '@lib/contentParser';
import { initInfiniteSliders } from '@lib/utils/infSlider';
import { markdownify } from '@lib/utils/textConverter';
import CallToAction from '@partials/CallToAction';
import Gallery from '@partials/Gallery';
import Image from 'next/image';
import { useEffect } from 'react';

export default function CaseStudySingle({ caseStudy, cta, gallery }) {
  const { title, description, clients, industry, company, location } =
    caseStudy.frontmatter;

  useEffect(() => {
    initInfiniteSliders();
  }, []);

  return (
    <Base title={title} description={description}>
      <section className="section-lg">
        <div className="container">
          <div className="row">
            {title && (
              <div className="mx-auto pb-10 lg:col-10">
                <h1
                  className="text-center text-h2_sm font-medium md:text-h2"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            )}
            <div className="col-12">
              <div className="row gy-4">
                <div className="lg:col-9">
                  <div className="flex min-h-full overflow-hidden rounded-2xl">
                    <Image
                      className="min-h-full w-full object-cover object-left-bottom"
                      width={850}
                      height={450}
                      src="/images/case-studies/how-supernova-eliminates-thumbnail.jpg"
                      alt="Customer Image or Video Thumbnail"
                    />
                  </div>
                </div>
                <div className="lg:col-3">
                  <div className="space-y-5 divide-y divide-white/10 rounded-xl bg-dark-quaternary p-7 md:p-10">
                    <div className="">
                      <p className="mb-2 text-base-sm opacity-80">Clients</p>
                      <p className="text-h6">Meltem Kuran, Head of Growth</p>
                    </div>
                    <div className="pt-4">
                      <p className="mb-2 text-base-sm opacity-80">Industry</p>
                      <p className="text-h6">Head of Growth</p>
                    </div>
                    <div className="pt-4">
                      <p className="mb-2 text-base-sm opacity-80">Location</p>
                      <p className="text-h6">Meltem Kuran</p>
                    </div>
                    <div className="pt-4">
                      <p className="mb-2 text-base-sm opacity-80">Company</p>
                      <p className="text-h6">Meltem Kuran</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-10 bg-dark-secondary p-7 md:mt-20 md:p-10">
          <div className="container py-10 md:py-20">
            {markdownify(caseStudy.content, 'div', 'content')}
          </div>
        </div>
      </section>
      <Gallery gallery={gallery} />
      <CallToAction cta={cta} />
    </Base>
  );
}

export async function getStaticPaths() {
  const caseStudies = await getSinglePage('content/customer-story');

  const paths = caseStudies.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
  }));

  return {
    paths,
    fallback: false, // If fallback is false, any invalid slugs will show a 404 page
  };
}

export async function getStaticProps({ params }) {
  const caseStudies = await getSinglePage('content/customer-story');
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);
  const cta = await getListPage('content/sections/call-to-action.md');
  const gallery = await getListPage('content/sections/gallery.md');

  return {
    props: {
      caseStudy,
      cta,
      gallery,
    },
  };
}
