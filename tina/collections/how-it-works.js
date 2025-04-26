const howItWorks = {
  label: 'How It Works Section',
  name: 'how_it_works',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'how-it-works',
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
      label: 'Quote',
      name: 'quote',
      type: 'object',
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          type: 'boolean',
        },
        {
          label: 'Content',
          name: 'content',
          type: 'string',
          ui: { component: 'textarea' },
        },
        {
          label: 'Quote By',
          name: 'quote_by',
          type: 'string',
        },
      ],
    },
    {
      label: 'Process',
      name: 'process',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          label: 'Content',
          name: 'content',
          type: 'string',
          ui: {
            component: 'textarea',
          },
        },
        {
          label: 'button',
          name: 'button',
          type: 'object',
          fields: [
            {
              label: 'Enable',
              name: 'enable',
              type: 'boolean',
            },
            {
              label: 'Label',
              name: 'label',
              type: 'string',
            },
            {
              label: 'Link',
              name: 'link',
              type: 'string',
            },
          ],
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name}` };
        },
      },
    },
  ],
};

export default howItWorks;
