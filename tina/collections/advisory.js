const advisory = {
  label: 'Advisory Section',
  name: 'advisory',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'advisory',
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
      label: 'Quote',
      name: 'quote',
      type: 'string',
    },
    {
      label: 'Services Image',
      name: 'services_image',
      type: 'image',
    },
    {
      label: 'Services Image Mobile',
      name: 'services_image_mobile',
      type: 'image',
    },
    {
      label: 'Founder Image',
      name: 'founder_image',
      type: 'image',
    },
    {
      label: 'Facts Colors',
      name: 'facts_colors',
      type: 'string',
      list: true,
    },
    {
      label: 'Facts',
      name: 'facts',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          label: 'Number',
          name: 'number',
          type: 'number',
        },
        {
          label: 'Suffix',
          name: 'suffix',
          type: 'string',
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        },
      },
    },
  ],
};

export default advisory;
