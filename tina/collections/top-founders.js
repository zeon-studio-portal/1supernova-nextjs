const topFounders = {
  label: 'Top Founders',
  name: 'top_founders',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'top-founders',
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
      label: 'List Colors',
      name: 'list_colors',
      type: 'string',
      list: true,
    },
    {
      label: 'Lists',
      name: 'lists',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Name',
          name: 'name',
          type: 'string',
        },
        {
          label: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          label: 'Designation',
          name: 'designation',
          type: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          label: 'Brand Logo',
          name: 'brand_logo',
          type: 'object',
          fields: [
            { label: 'Width', name: 'width', type: 'string' },
            { label: 'File', name: 'file', type: 'image' },
          ],
        }
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name}` };
        },
      },
    },
  ],
};

export default topFounders;
