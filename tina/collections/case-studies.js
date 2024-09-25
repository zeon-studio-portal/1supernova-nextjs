const caseStudies = {
  label: 'Case Studies',
  name: 'customer_story',
  path: 'content/customer-story',
  format: 'mdx',
  ui: {
    filename: {
      // if disabled, the editor can not edit the filename
      readonly: true,
      // Example of using a custom slugify function
      slugify: (values) => {
        return `${values?.title?.toLowerCase().replace(/ /g, '-')}`;
      },
    },
  },
  fields: [
    {
      label: 'Title',
      name: 'title',
      type: 'string',
      isTitle: true,
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
          required: true,
        },
        {
          label: 'Youtube Video ID',
          name: 'youtube_video_id',
          type: 'string',
          required: false,
        },
        {
          label: 'Or Image',
          name: 'image',
          type: 'image',
          required: false,
        },
        {
          label: 'Stage',
          name: 'stage',
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
