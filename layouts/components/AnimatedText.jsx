'use client';

import { marked } from 'marked';
const AnimatedText = ({ content, tag, className }) => {

  const Tag = tag || 'h2';

  return (
    <Tag className={className + ' text'}>
      <p
        dangerouslySetInnerHTML={{
          __html:
            tag === 'div' ? marked.parse(content) : marked.parseInline(content),
        }}
      />
    </Tag>
  );
};

export default AnimatedText;
