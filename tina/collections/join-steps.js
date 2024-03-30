const joinSteps = {
  label: 'Join Steps',
  name: 'join_steps',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'join-steps',
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
          label: 'Content',
          name: 'content',
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

export default joinSteps;
