const whySuperNovaExists = {
  label: 'Why Supernova Exists Section',
  name: 'whySuperNovaExists',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'why-supernova-exists',
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
      label: 'Image',
      name: 'image',
      type: 'image',
    },
    {
      label: 'Image Alt',
      name: 'image_alt',
      type: 'string',
    },
    {
      label: 'Lists',
      name: 'lists',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
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

export default whySuperNovaExists;
