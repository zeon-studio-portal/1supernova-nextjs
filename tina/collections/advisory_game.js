const advisory_game = {
  label: 'Advisory Game Section',
  name: 'advisory_game',
  path: 'content/sections',
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: 'advisory-game',
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
};

export default advisory_game;
