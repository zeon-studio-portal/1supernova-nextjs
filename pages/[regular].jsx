import NotFound from "@layouts/404";
import Base from "@layouts/Baseof";
import { getRegularPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import { MDXRemote } from "next-mdx-remote";

// for all regular pages
const RegularPages = ({ data }) => {
  const { title, meta_title, description, image, noindex, canonical, layout } =
    data.frontmatter;
  const { content, mdxContent } = data;

  return (
    <Base
      title={title}
      description={description ? description : content.slice(0, 120)}
      meta_title={meta_title}
      image={image}
      noindex={noindex}
      canonical={canonical}
    >
      {layout === "404" ? (
        <NotFound data={data} />
      ) : (
        <section className="section">
          <div className="container">
            {markdownify(title, "h1", "h2 mb-8")}
            <div className="content">
              <MDXRemote {...mdxContent} />
            </div>
          </div>
        </section>
      )}
    </Base>
  );
};
export default RegularPages;

// for regular page routes
export const getStaticPaths = async () => {
  const slugs = getSinglePage("content");
  const paths = slugs.map((item) => ({
    params: {
      regular: item.slug,
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

// for regular page data
export const getStaticProps = async ({ params }) => {
  const { regular } = params;
  const allPages = await getRegularPage(regular);

  return {
    props: {
      slug: regular,
      data: allPages,
    },
  };
};
