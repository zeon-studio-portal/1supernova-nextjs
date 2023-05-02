const config = {
  label: "Configuration",
  name: "configuration",
  path: "config",
  format: "json",
  global: true,
  ui: {
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
      label: "Params",
      name: "params",
      type: "object",
      fields: [
        {
          label: "Header CTA Link",
          name: "header_cta_link",
          type: "string",
        },
        {
          label: "Announcement",
          name: "announcement",
          type: "string",
        },
        {
          label: "Tag Manager ID",
          name: "tag_manager_id",
          type: "string",
        },
        {
          label: "Footer Copy",
          name: "footer_copy",
          type: "string",
        },
        {
          label: "Copyright",
          name: "copyright",
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
  ],
};

export default config;
