const testimonials = {
  label: "Testimonials",
  name: "testimonials",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "testimonials",
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
      label: "Testimonial Items",
      name: "items",
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
        {
          label: "Company",
          name: "company",
          type: "string",
        },
        {
          label: "Quote",
          name: "quote",
          type: "string",
          ui: { component: "textarea" },
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

export default testimonials;
