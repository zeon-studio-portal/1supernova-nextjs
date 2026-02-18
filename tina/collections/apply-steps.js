const applySteps = {
  label: 'Apply Steps Section',
  name: 'apply_steps',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'apply-steps',
  },
  fields: [
    {
      label: 'Enable',
      name: 'enable',
      type: 'boolean',
    },
    {
      label: 'Background Image',
      name: 'background_image',
      type: 'image',
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
      label: 'Step List',
      name: 'step_list',
      type: 'object',
      list: true,
      fields: [
        {
          label: 'Title',
          name: 'title',
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
          label: 'Icon (React Icon Name)',
          name: 'icon',
          type: 'string',
          description: 'Example: IoDocumentTextOutline, FaRegStar, LuUsers',
        },
        {
          label: 'Link',
          name: 'link',
          type: 'string',
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.title}` };
        },
      },
    },
    {
      label: 'Card List',
      name: 'card_list',
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

export default applySteps;
