import ArrowButton from '@components/ArrowButton';
import Image from 'next/image';

const CaseStudyFeatured = ({ top_founders }) => {
  return (
    top_founders.frontmatter.enable === true && (
      <section id="portfolio" className="section-lg bg-dark-primary">
        <div className="container text-center">
          <div className=" flex flex-col gap-y-12">
            {top_founders.frontmatter.lists
              .filter(
                (item) => item.case_study_link && item.case_study_link !== '#'
              )
              .map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-x-20 gap-y-10 md:flex-row"
                  data-aos="fade-up-sm"
                  data-aos-delay={(index - 0.5) * 100}>
                  <div className="md:w-1/2">
                    <Image
                      className="aspect-[16/12] h-auto w-full rounded-b-3xl rounded-t-3xl object-cover "
                      src={item.image}
                      alt={item.name}
                      width={544}
                      height={368}
                    />
                  </div>
                  <div className="md:w-1/2 ">
                    <Image
                      width={261}
                      height={59}
                      className="mb-8 "
                      src={item.brand_logo.file}
                      alt={item.name}
                    />

                    <blockquote className="mb-6 text-left text-h5 font-medium text-secondary-600">
                      {item.testimonial || item.description}
                    </blockquote>

                    {/* Name, Designation */}
                    <div className="flex items-center gap-5">
                      <Image
                        src={item.avatar || item.image}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="my-0 h-14 w-14 rounded-full object-cover"
                      />
                      <div className=" flex flex-col text-base-sm md:text-base">
                        <p className="my-0">{item.name}</p>
                        <div className="flex items-center gap-3">
                          <div className="my-0 size-2 rounded-full bg-secondary-800"></div>
                          <p className="relative my-0  text-xs md:text-sm">
                            {item.designation}
                          </p>
                        </div>
                      </div>
                    </div>

                    {item.case_study_link && item.case_study_link !== '#' && (
                      <ArrowButton
                        link={item.case_study_link}
                        label={'Read Case Study'}
                        className={
                          'mt-10 rounded-xl bg-secondary-600 px-5 py-3 text-lg font-medium text-dark-primary'
                        }
                      />
                    )}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    )
  );
};

export default CaseStudyFeatured;
