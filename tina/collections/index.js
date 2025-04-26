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

    {
      label: 'Advisory Game',
      name: 'advisory_game',
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
          label: 'NPS Score',
          name: 'nps_score',
          type: 'image',
        },
        {
          label: 'NPS Score Mobile',
          name: 'nps_score_mobile',
          type: 'image',
        },
      ],
    },
  ],
};

export default index;
