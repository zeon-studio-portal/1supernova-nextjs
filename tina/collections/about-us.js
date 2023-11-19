const aboutUs = {
  label: "About Us",
  name: "about_us",
  path: "content/about-us",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "_index",
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
    },
    {
      label: "Description",
      name: "description",
      type: "string",
    },
    {
      label: "Who We Are",
      name: "who_we_are",
      type: "object",
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
          label: "Content",
          name: "content",
          type: "rich-text",
        },
      ],
    },
    {
      label: "Our Values",
      name: "our_values",
      type: "object",
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
          label: "Image",
          name: "image",
          type: "image",
        },
        {
          label: "List Colors",
          name: "list_colors",
          type: "string",
          list: true,
        },
        {
          label: "Lists",
          name: "lists",
          type: "object",
          list: true,
          fields: [
            {
              label: "Name",
              name: "name",
              type: "string",
            },
            {
              label: "Content",
              name: "content",
              type: "string",
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.name}` };
            },
          },
        },
      ],
    },
    {
      label: "Why Supernova Exists",
      name: "why_supernova_exists",
      type: "object",
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
          name: "quote",
          type: "string",
        },
        {
          label: "Content Left",
          name: "content_left",
          type: "rich-text",
        },
        {
          label: "Content Right",
          name: "content_right",
          type: "rich-text",
        },
      ],
    },
    {
      label: "Leadership Team",
      name: "leadership_team",
      type: "object",
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
          label: "Lists",
          name: "lists",
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
              label: "Designation",
              name: "designation",
              type: "string",
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.name}` };
            },
          },
        },
      ],
    },
    {
      label: "Contact Us",
      name: "contact_us",
      type: "object",
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
              label: "Name",
              name: "name",
              type: "string",
            },
            {
              label: "Email",
              name: "email",
              type: "string",
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
      ],
    },
  ],
};

export default aboutUs;
