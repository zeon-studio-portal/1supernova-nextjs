const joinSupernovaNetwork = {
  label: 'Join Supernova Section',
  name: 'joinSupernovaNetwork',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'join_the_supernova_network',
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
      label: 'Description',
      name: 'description',
      type: 'string',
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
      label: 'Main Image',
      name: 'main_image',
      type: 'image',
    },
    {
      label: 'Testimonial',
      name: 'testimonial',
      type: 'object',
      fields: [
        {
          label: 'Content',
          name: 'content',
          type: 'string',
        },
        {
          label: 'Customer Avatar',
          name: 'customer_avatar',
          type: 'image',
        },
        {
          label: 'Customer Name',
          name: 'customer_name',
          type: 'string',
        },
        {
          label: 'Customer Profession',
          name: 'customer_profession',
          type: 'string',
        },
      ],
    },
  ],
};

export default joinSupernovaNetwork;
