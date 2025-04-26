const goSupernova = {
  label: 'Go Supernova Section',
  name: 'go_supernova',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'go-supernova',
  },
  fields: [
    {
      label: 'Enable',
      name: 'enable',
      type: 'boolean',
    },
    {
      label: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      label: 'Subtitle',
      name: 'subtitle',
      type: 'string',
    },
    {
      label: 'Video URL',
      name: 'video_url',
      type: 'string',
    },
    {
      label: 'Quote',
      name: 'quote',
      type: 'string',
    },
    {
      label: 'Features',
      name: 'features',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Icon',
          name: 'icon',
          type: 'image',
        },
        {
          label: 'Content',
          name: 'content',
          type: 'string',
          ui: {
            component: 'textarea',
          },
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.content.slice(0, 100)}` };
        },
      },
    },
  ],
};

export default goSupernova;
