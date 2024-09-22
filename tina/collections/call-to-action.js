const getStarted = {
  label: 'Call To Action',
  name: 'call_to_action',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'call-to-action',
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
      ui: {
        component: 'textarea',
      },
    },
    {
      label: 'Button',
      name: 'button',
      type: 'object',
      fields: [
        {
          label: 'Enable Button',
          name: 'enable',
          type: 'boolean',
        },
        {
          label: 'Link',
          name: 'link',
          type: 'string',
        },
        {
          label: 'Label',
          name: 'label',
          type: 'string',
        },
      ],
    },
  ],
};

export default getStarted;
