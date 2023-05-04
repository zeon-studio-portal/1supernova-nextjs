const joinCommunity = {
  label: "Join Community",
  name: "join_community",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "join-community",
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
      label: "Info",
      name: "info",
      type: "string",
    },
    {
      label: "Lists",
      name: "lists",
      type: "object",
      list: true,
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Icon",
          name: "icon",
          type: "image",
        },
        {
          label: "Content",
          name: "content",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          label: "button",
          name: "button",
          type: "object",
          fields: [
            {
              label: "Label",
              name: "label",
              type: "string",
            },
            {
              label: "Link",
              name: "link",
              type: "string",
            },
          ],
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

export default joinCommunity;
