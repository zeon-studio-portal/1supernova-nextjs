import { markdownify } from '@lib/utils/textConverter';

const JoinSteps = ({ join_steps }) => {
  const colors = join_steps.frontmatter.list_colors;

  return (
    join_steps.frontmatter.enable === true && (
      <section id="join-steps" className="bg-dark-quaternary py-24">
        <div className="container text-center">
          <div data-aos="fade-up-sm">
            {markdownify(
              join_steps.frontmatter.title,
              'h2',
              'font-medium mb-4'
            )}
          </div>
          <div data-aos="fade-up-sm">
            {markdownify(
              join_steps.frontmatter.subtitle,
              'p',
              'text-light-secondary md:text-xl'
            )}
          </div>

          <div className="mt-10 grid gap-x-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
            {join_steps.frontmatter.lists.map((item, index) => (
              <div
                key={index}
                className="mt-10 flex flex-col sm:mt-6"
                data-aos="fade-up-sm"
                data-aos-delay={(index - 0.5) * 100}>
                <p
                  className="text-8xl font-bold md:mb-2 md:text-9xl"
                  style={{ color: colors[index] }}>
                  {index + 1}
                </p>
                <p className="mb-3 text-2xl font-semibold leading-snug md:text-3xl">
                  {item.name}
                </p>
                <p className="block text-[16px] leading-snug">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  );
};

export default JoinSteps;
