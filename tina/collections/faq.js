const faq = {
  label: "FAQs",
  name: "faqs",
  path: "content/sections",
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
      ui: {
        component: "textarea",
      }
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
