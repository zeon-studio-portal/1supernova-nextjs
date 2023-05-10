const superstars = {
  label: "Superstars",
  name: "superstars",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "superstars",
  },
  fields: [
    {
      label: "Enable",
      name: "enable",
      type: "boolean",
    },
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      label: "Quote",
      name: "quote",
      type: "string",
    },
    {
      label: "Group list",
      name: "group_list",
      type: "object",
      list: true,
      fields: [
        {
          label: "Name",
          name: "name",
          type: "string",
        },
        {
          label: "Icon",
          name: "icon",
          type: "image",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.name}` };
        },
      },
    },
    {
      label: "Team list",
      name: "team",
      type: "object",
      list: true,
      fields: [
        {
          label: "Name",
          name: "name",
          type: "string",
        },
        {
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "Department",
          name: "department",
          type: "string",
          list: true,
        },
        {
          label: "Bulletpoints",
          name: "bulletpoints",
          type: "string",
          list: true,
        },
        {
          label: "Content",
          name: "content",
          type: "rich-text",
        },
        {
          label: "Brands",
          name: "brands",
          type: "image",
          list: true,
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

export default superstars;
