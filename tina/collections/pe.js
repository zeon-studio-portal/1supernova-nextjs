const pe = {
  label: 'PE Page',
  name: 'pe',
  path: 'content/pe',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: '_index',
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      label: 'Banner',
      name: 'banner',
      type: 'object',
      fields: [
        { label: 'Badge', name: 'badge', type: 'string' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        { label: 'Background Image', name: 'background_image', type: 'image' },
        {
          label: 'Fill Button',
          name: 'fill_button',
          type: 'object',
          fields: [
            { label: 'Enable', name: 'enable', type: 'boolean' },
            { label: 'Label', name: 'label', type: 'string' },
            { label: 'Link', name: 'link', type: 'string' },
          ],
        },
        {
          label: 'Outline Button',
          name: 'outline_button',
          type: 'object',
          fields: [
            { label: 'Enable', name: 'enable', type: 'boolean' },
            { label: 'Label', name: 'label', type: 'string' },
            { label: 'Link', name: 'link', type: 'string' },
          ],
        },
        {
          label: 'Facts',
          name: 'facts',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            { label: 'Prefix', name: 'prefix', type: 'string' },
            { label: 'Number', name: 'number', type: 'number' },
            { label: 'Suffix', name: 'suffix', type: 'string' },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
      ],
    },
    {
      label: 'Market Reality',
      name: 'the_market_reality',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Badge', name: 'badge', type: 'string' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'Quote',
          name: 'quote',
          type: 'object',
          fields: [
            { label: 'Content', name: 'content', type: 'string' },
            { label: 'Author', name: 'author', type: 'string' },
          ],
        },
        {
          label: 'List',
          name: 'list',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            { label: 'Content', name: 'content', type: 'string' },
            { label: 'Icon', name: 'icon', type: 'image' },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.title}` }),
          },
        },
      ],
    },
    {
      label: 'Difference',
      name: 'the_difference',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Badge', name: 'badge', type: 'string' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'Features',
          name: 'features',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            {
              label: 'List',
              name: 'list',
              type: 'string',
              list: true,
            },
            { label: 'Highlight', name: 'highlight', type: 'boolean' },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.title}` }),
          },
        },
      ],
    },
    {
      label: 'How It Works',
      name: 'how_it_works',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Badge', name: 'badge', type: 'string' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'Comparison Table',
          name: 'comparison_table',
          type: 'object',
          list: true,
          fields: [
            { label: 'Category', name: 'category', type: 'string' },
            { label: 'Traditional', name: 'traditional', type: 'string' },
            { label: 'Supernova', name: 'supernova', type: 'string' },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.category}` }),
          },
        },
      ],
    },
    {
      label: 'Nova Process',
      name: 'the_nova_process',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Badge', name: 'badge', type: 'string' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'Process Steps',
          name: 'process_steps',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            { label: 'Content', name: 'content', type: 'string' },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.title}` }),
          },
        },
      ],
    },
    {
      label: 'Most Value',
      name: 'most_value',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Badge', name: 'badge', type: 'string' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'List',
          name: 'list',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            { label: 'Content', name: 'content', type: 'string' },
            { label: 'Icon', name: 'icon', type: 'image' },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.title}` }),
          },
        },
      ],
    },
    {
      label: 'Why Supernova',
      name: 'why_supernova',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'List',
          name: 'list',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            { label: 'Content', name: 'content', type: 'string' },
            { label: 'Icon', name: 'icon', type: 'image' },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.title}` }),
          },
        },
      ],
    },
    {
      label: 'Operating Alpha',
      name: 'operating_alpha',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'Bullet Points',
          name: 'bullet_points',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            { label: 'Emoji', name: 'emoji', type: 'string' },
            { label: 'Subtitle', name: 'subtitle', type: 'string' },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.title}` }),
          },
        },
        {
          label: 'Content Box',
          name: 'content_box',
          type: 'object',
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            {
              label: 'List',
              name: 'list',
              type: 'string',
              list: true,
            },
          ],
        },
      ],
    },
    {
      label: 'Engagement Models',
      name: 'engagement_models',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Badge', name: 'badge', type: 'string' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Subtitle', name: 'subtitle', type: 'string' },
        {
          label: 'Models',
          name: 'models',
          type: 'object',
          list: true,
          fields: [
            { label: 'Title', name: 'title', type: 'string' },
            { label: 'Price', name: 'price', type: 'string' },
            { label: 'Content', name: 'content', type: 'string' },
            { label: 'Icon', name: 'icon', type: 'image' },
            { label: 'Highlight', name: 'highlight', type: 'boolean' },
            {
              label: 'Bullet Points',
              name: 'bullet_points',
              type: 'string',
              list: true,
            },
            {
              label: 'Button',
              name: 'button',
              type: 'object',
              fields: [
                { label: 'Enable', name: 'enable', type: 'boolean' },
                { label: 'Label', name: 'label', type: 'string' },
                { label: 'Link', name: 'link', type: 'string' },
              ],
            },
          ],
          ui: {
            itemProps: (item) => ({ label: `${item?.title}` }),
          },
        },
      ],
    },
    {
      label: 'Call To Action',
      name: 'call_to_action',
      type: 'object',
      fields: [
        { label: 'Enable', name: 'enable', type: 'boolean' },
        { label: 'Title', name: 'title', type: 'string' },
        { label: 'Content', name: 'content', type: 'string' },
        {
          label: 'Button Fill',
          name: 'button_fill',
          type: 'object',
          fields: [
            { label: 'Enable', name: 'enable', type: 'boolean' },
            { label: 'Label', name: 'label', type: 'string' },
            { label: 'Link', name: 'link', type: 'string' },
          ],
        },
        {
          label: 'Button Outline',
          name: 'button_outline',
          type: 'object',
          fields: [
            { label: 'Enable', name: 'enable', type: 'boolean' },
            { label: 'Label', name: 'label', type: 'string' },
            { label: 'Link', name: 'link', type: 'string' },
          ],
        },
      ],
    },
  ],
};
export default pe;
