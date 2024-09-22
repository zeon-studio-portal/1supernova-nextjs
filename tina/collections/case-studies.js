const caseStudies = {
  label: 'Case Studies',
  name: 'customer-story',
  name: 'customer_story',
  path: 'content/customer-story',
  format: 'mdx',
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string',
      isTitle: true, // Marks this as the title in the editor UI
      required: true,
    },
    {
      label: 'Description',
      name: 'description',
      type: 'string',
    },
    {
      label: 'Information',
      name: 'information',
      type: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'string',
          isTitle: true,
          required: true,
        },
        {
          label: 'Image',
          name: 'image',
          type: 'image',
          required: true,
        },
        {
          label: 'Clients',
          name: 'clients',
          type: 'string',
        },
        {
          label: 'Industry',
          name: 'industry',
          type: 'string',
        },
        {
          label: 'Company',
          name: 'company',
          type: 'string',
        },
        {
          label: 'Location',
          name: 'location',
          type: 'string',
        },
      ],
    },
    {
      type: 'rich-text',
      name: 'body',
      label: 'Body of Document',
      isBody: true,
      templates: [
        {
          name: 'BlockQuote',
          label: 'Customer Review',
          fields: [
            {
              label: 'Customer Image',
              name: 'customerImage',
              type: 'image',
            },
            {
              label: 'Customer Name',
              name: 'customerName',
              type: 'string',
            },
            {
              label: 'Customer Role',
              name: 'customerRole',
              type: 'string',
            },
            {
              label: 'Content',
              name: 'content',
              type: 'string',
              ui: {
                component: 'textarea',
              },
            },
          ],
        },
      ],
    },
  ],
};

export default caseStudies;
