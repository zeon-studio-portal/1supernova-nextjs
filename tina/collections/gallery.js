const gallery = {
  label: 'Gallery',
  name: 'gallery',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'gallery',
  },
  fields: [
    {
      label: 'Enable',
      name: 'enable',
      type: 'boolean',
    },
    {
      label: 'Image Width',
      name: 'galleryImageWidth',
      type: 'string',
    },
    {
      label: 'Top Images Animation Speed',
      name: 'animationSpeedForTop',
      type: 'string',
    },
    {
      label: 'Bottom Images Animation Speed',
      name: 'animationSpeedForBottom',
      type: 'string',
    },
    {
      label: 'Title',
      name: 'title',
      type: 'string',
    },
    {
      label: 'Top List',
      name: 'topList',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          label: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.alt || 'Image'}` };
        },
      },
    },
    {
      label: 'Bottom List',
      name: 'bottomList',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          label: 'Alt Text',
          name: 'alt',
          type: 'string',
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.alt || 'Image'}` };
        },
      },
    },
  ],
};

export default gallery;
