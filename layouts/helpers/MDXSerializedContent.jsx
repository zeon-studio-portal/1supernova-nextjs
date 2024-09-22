import shortcodes from '@shortcodes/all';
import { MDXRemote } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';

const MDXSerializedContent = async ({ content }) => {
  const parseMDX = async (content) => {
    const options = {
      mdxOptions: {
        rehypePlugins: [rehypeSlug],
        remarkPlugins: [remarkGfm],
      },
    };
    return await serialize(content, options);
  };
  const mdxContent = await parseMDX(content);

  return (
    <>
      {/* @ts-ignore */}
      <MDXRemote
        {...mdxContent}
        components={shortcodes}
        options={{ mdxOptions }}
      />
    </>
  );
};

export default MDXSerializedContent;
