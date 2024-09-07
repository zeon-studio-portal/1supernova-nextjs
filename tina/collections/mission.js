const supernovaCollection = {
  label: "Mission",
  name: "mission",
  path: "content/sections",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "mission",
  },
  fields: [
    {
      label: "Enable",
      name: "enable",
      type: "boolean",
    },
    {
      label: "Main Image",
      name: "main_image",
      type: "image",
    },
    {
      label: "Comparison Image",
      name: "comparison_image",
      type: "image",
    },
    {
      label: "Testimonial",
      name: "testimonial",
      type: "object",
      fields: [
        {
          label: "Content",
          name: "content",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
        {
          label: "Customer Avatar",
          name: "customer_avatar",
          type: "image",
        },
        {
          label: "Customer Name",
          name: "customer_name",
          type: "string",
        },
        {
          label: "Customer Profession",
          name: "customer_profession",
          type: "string",
        },
      ],
    },
    {
      label: "Heading",
      name: "headings",
      type: "object",
      list: true,
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
          ui: {
            component: "textarea",
          },
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

export default supernovaCollection;
