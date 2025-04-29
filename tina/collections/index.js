const index = {
  label: 'Homepage',
  name: 'index',
  path: 'content',
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
      label: 'Banner',
      name: 'banner',
      type: 'object',
      fields: [
        {
          label: 'Badge',
          name: 'badge',
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
              label: 'Images',
              name: 'images',
              type: 'image',
              list: true,
            },
          ],
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
          label: 'Background Video Youtube Id',
          name: 'background_youtube_video_id',
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
              label: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              label: 'Items',
              name: 'items',
              type: 'string',
              list: true,
            },
          ],
        },
        {
          label: 'Video Button',
          name: 'video_button',
          type: 'object',
          fields: [
            {
              label: 'Enable',
              name: 'enable',
              type: 'boolean',
            },
            {
              label: 'label',
              name: 'label',
              type: 'string',
            },
            {
              label: 'youtube_id',
              name: 'youtube_id',
              type: 'string',
            },
          ],
        },
        {
          label: 'Button',
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
        {
          label: 'Founders',
          name: 'founders',
          type: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              label: 'Brands',
              name: 'brands',
              type: 'image',
              list: true,
            },
          ],
        },
      ],
    },
  ],
};

export default index;
