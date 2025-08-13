const trustedBrands = {
  label: 'Trusted Brands Section',
  name: 'trusted-brands',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'trusted-brands',
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
      label: 'Brand List',
      name: 'brand_list',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          label: 'Logo',
          name: 'logo',
          type: 'image',
        },
        {
          label: 'Website URL',
          name: 'website',
          type: 'string',
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

export default trustedBrands;
