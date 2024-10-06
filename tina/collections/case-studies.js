const caseStudies = {
  label: 'Case Studies',
  name: 'Case_Studies',
  path: 'content/casestudy',
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
          name: 'youtubeVideoId',
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
      label: 'Gallery',
      name: 'gallery',
      type: 'object',
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          type: 'boolean',
        },
        {
          label: 'Image Width',
          name: 'galleryImageWidth',
          type: 'string',
        },
        {
          label: 'Top Images Animation Speed',
          name: 'animationSpeedForTop',
          type: 'string',
        },
        {
          label: 'Bottom Images Animation Speed',
          name: 'animationSpeedForBottom',
          type: 'string',
        },
        {
          label: 'Top List',
          name: 'topList',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Image',
              name: 'image',
              type: 'image',
            },
            {
              label: 'Alt Text',
              name: 'alt',
              type: 'string',
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.alt || 'Image'}` };
            },
          },
        },
        {
          label: 'Bottom List',
          name: 'bottomList',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Image',
              name: 'image',
              type: 'image',
            },
            {
              label: 'Alt Text',
              name: 'alt',
              type: 'string',
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.alt || 'Image'}` };
            },
          },
        },
      ],
    },
    {
      label: 'Call To Action',
      name: 'call_to_action',
      type: 'object',
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          type: 'boolean',
        },
        {
          label: 'Title',
          name: 'title',
          type: 'string',
          ui: {
            component: 'textarea',
          },
        },
        {
          label: 'Button',
          name: 'button',
          type: 'object',
          fields: [
            {
              label: 'Enable Button',
              name: 'enable',
              type: 'boolean',
            },
            {
              label: 'Link',
              name: 'link',
              type: 'string',
            },
            {
              label: 'Label',
              name: 'label',
              type: 'string',
            },
          ],
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
