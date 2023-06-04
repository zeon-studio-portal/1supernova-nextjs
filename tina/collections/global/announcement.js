const announcement = {
  label: "Announcement + Copywriting",
  name: "announcement",
  path: "config",
  format: "json",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "settings",
  },
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
      ui: {
        component: "textarea",
      }
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
};

export default announcement;
