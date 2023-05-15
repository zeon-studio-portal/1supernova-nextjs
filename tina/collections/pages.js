const pages = {
  label: "Pages",
  name: "pages",
  path: "content",
  match: {
    include: "*",
    exclude: "{_index,about-us}",
  },
  fields: [
    {
      label: "Title",
      name: "title",
      type: "string",
      isTitle: true,
      required: true,
    },
    {
      label: "Description",
      name: "description",
      type: "string",
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body of Document",
      description: "This is the markdown body",
      isBody: true,
    },
  ],
};

export default pages;
