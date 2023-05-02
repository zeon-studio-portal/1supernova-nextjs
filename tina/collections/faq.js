const faq = {
  label: "FAQs",
  name: "faqs",
  path: "content",
  ui: {
    allowedActions: {
      create: false,
      delete: false,
    },
  },
  match: {
    include: "faq",
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
      label: "Social",
      name: "social_media",
      type: "object",
      list: true,
      fields: [
        { label: "Link", name: "link", type: "string" },
        {
          label: "Icon",
          name: "icon",
          type: "image",
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.icon}` };
        },
      },
    },
    {
      label: "Lists",
      name: "lists",
      type: "object",
      list: true,
      fields: [
        {
          label: "Question",
          name: "question",
          type: "string",
        },
        {
          label: "Answer",
          name: "answer",
          type: "string",
          ui: {
            component: "textarea",
          },
        },
      ],
      ui: {
        itemProps: (item) => {
          return { label: `${item?.question}` };
        },
      },
    },
  ],
};

export default faq;
