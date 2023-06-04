const config = {
  label: "Configuration",
  name: "configuration",
  path: "config",
  format: "json",
  ui: {
    global: true,
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "config",
  },
  fields: [
    {
      label: "Site",
      name: "site",
      type: "object",
      fields: [
        {
          label: "Title",
          name: "title",
          type: "string",
        },
        {
          label: "Favicon",
          name: "favicon",
          type: "image",
        },
        {
          label: "Logo",
          name: "logo",
          type: "image",
        },
        {
          label: "Logo Width",
          name: "logo_width",
          type: "string",
        },
        {
          label: "Logo Height",
          name: "logo_height",
          type: "string",
        },
        {
          label: "Logo Text",
          name: "logo_text",
          type: "string",
        },
        {
          label: "Mobile Navigation Text",
          name: "mobile_nav_text",
          type: "string",
        },
      ],
    },
    {
      label: "Metadata",
      name: "metadata",
      type: "object",
      fields: [
        {
          label: "Meta Author",
          name: "meta_author",
          type: "string",
        },
        {
          label: "Meta Image",
          name: "meta_image",
          type: "image",
        },
        {
          label: "Meta Description",
          name: "meta_description",
          type: "string",
        },
      ],
    },
    {
      label: "Social",
      name: "social_media",
      type: "object",
      list: true,
      fields: [
        { label: "Name", name: "name", type: "string" },
        { label: "Link", name: "link", type: "string" },
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
  ],
};

export default config;
