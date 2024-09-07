import Base from "@layouts/Baseof";
import { getSinglePage } from "@lib/contentParser";

export default function CaseStudySingle ({ caseStudy }) {
  const { title, description, clients, industry, company, location } = caseStudy.frontmatter;
  

  return (
    <Base title={title} description={description}>
      <section className="section-lg">
        <div className="container">
          <div className="row">
            {
              title && (
                <div className="lg:col-10 pb-10 mx-auto">
                  <h1 className="text-h2_sm md:text-h2 text-center" dangerouslySetInnerHTML={{__html: title}} />
                </div>
              )
            }
            <div className="col-12">
              <div className="row gy-4">
                <div className="lg:col-9">
                  <div className="border p-10 rounded-2xl">
                    <img src="" alt="" />
                  </div>
                </div>
                <div className="lg:col-3">
                  <div className="bg-dark-quaternary p-7 md:p-10 rounded-xl divide-y divide-white/10 space-y-5">
                    <div className="">
                      <p className="opacity-80 text-base mb-2">Clients</p>
                      <p className="text-h6">
                        Head of Growth
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="opacity-80 text-base mb-2">Industry</p>
                      <p className="text-h6">
                        Head of Growth
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="opacity-80 text-base mb-2">Location</p>
                      <p className="text-h6">
                        Meltem Kuran
                      </p>
                    </div>
                    <div className="pt-4">
                      <p className="opacity-80 mb-2">Company</p>
                      <p className="text-h6">
                        Meltem Kuran
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Base>
  );
};

export async function getStaticPaths() {
  const caseStudies = await getSinglePage("content/customer-story");
  const paths = caseStudies.map((caseStudy) => ({
    params: { slug: caseStudy.slug },
  }));

  return {
    paths,
    fallback: false, // If fallback is false, any invalid slugs will show a 404 page
  };
}

export async function getStaticProps({ params }) {
  const caseStudies = await getSinglePage("content/customer-story");
  const caseStudy = caseStudies.find((study) => study.slug === params.slug);

  return {
    props: {
      caseStudy,
    },
  };
}