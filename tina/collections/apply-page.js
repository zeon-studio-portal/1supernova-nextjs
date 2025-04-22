const applyPage = {
  label: 'Apply Page',
  name: 'apply_page',
  path: 'content/apply',
  match: {
    include: '_index',
  },
  fields: [
    {
      label: 'Banner',
      name: 'banner',
      type: 'object',
      fields: [
        {
          label: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          label: 'Background YouTube Video ID',
          name: 'background_youtube_video_id',
          type: 'string',
        },
        {
          label: 'Video Button',
          name: 'video_button',
          type: 'object',
          fields: [
            {
              label: 'Enable',
              name: 'enable',
              type: 'boolean',
            },
            {
              label: 'Label',
              name: 'label',
              type: 'string',
            },
            {
              label: 'YouTube ID',
              name: 'youtube_id',
              type: 'string',
            },
          ],
        },
        {
          label: 'Founders',
          name: 'founders',
          type: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              label: 'Brands',
              name: 'brands',
              type: 'image',
              list: true,
            },
          ],
        },
        {
          label: 'Button',
          name: 'button',
          type: 'object',
          fields: [
            {
              label: 'Enable',
              name: 'enable',
              type: 'boolean',
            },
            {
              label: 'Label',
              name: 'label',
              type: 'string',
            },
            {
              label: 'Link',
              name: 'link',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      label: 'Join the Supernova Network',
      name: 'join_the_supernova_network',
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
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          label: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          label: 'Button',
          name: 'button',
          type: 'object',
          fields: [
            {
              label: 'Enable',
              name: 'enable',
              type: 'boolean',
            },
            {
              label: 'Label',
              name: 'label',
              type: 'string',
            },
            {
              label: 'Link',
              name: 'link',
              type: 'string',
            },
          ],
        },
        {
          label: 'Main Image',
          name: 'main_image',
          type: 'image',
        },
        {
          label: 'Testimonial',
          name: 'testimonial',
          type: 'object',
          fields: [
            {
              label: 'Content',
              name: 'content',
              type: 'string',
            },
            {
              label: 'Customer Avatar',
              name: 'customer_avatar',
              type: 'image',
            },
            {
              label: 'Customer Name',
              name: 'customer_name',
              type: 'string',
            },
            {
              label: 'Customer Profession',
              name: 'customer_profession',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      label: 'Upload and Apply',
      name: 'upload_and_apply',
      type: 'object',
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          type: 'boolean',
        },
        {
          label: 'Background Image',
          name: 'background_image',
          type: 'image',
        },
        {
          label: 'Title',
          name: 'title',
          type: 'string',
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          label: 'Form',
          name: 'form',
          type: 'object',
          fields: [
            {
              label: 'Placeholder',
              name: 'placeholder',
              type: 'string',
            },
            {
              label: 'Action',
              name: 'action',
              type: 'string',
            },
            {
              label: 'Button',
              name: 'button',
              type: 'object',
              fields: [
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
          label: 'Card List',
          name: 'card_list',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
      ],
    },
    {
      label: 'Unlock Access',
      name: 'unlock_access',
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
        },
        {
          label: 'Process',
          name: 'process',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Name',
              name: 'name',
              type: 'string',
            },
            {
              label: 'Data',
              name: 'data',
              type: 'object',
              fields: [
                {
                  label: 'Left Section',
                  name: 'left_section',
                  type: 'object',
                  fields: [
                    {
                      label: 'Button',
                      name: 'button',
                      type: 'object',
                      fields: [
                        {
                          label: 'Enable',
                          name: 'enable',
                          type: 'boolean',
                        },
                        {
                          label: 'Label',
                          name: 'label',
                          type: 'string',
                        },
                        {
                          label: 'Link',
                          name: 'link',
                          type: 'string',
                        },
                      ],
                    },
                    {
                      label: 'Testimonial',
                      name: 'testimonial',
                      type: 'object',
                      fields: [
                        {
                          label: 'Enable',
                          name: 'enable',
                          type: 'boolean',
                        },
                        {
                          label: 'Content',
                          name: 'content',
                          type: 'string',
                        },
                        {
                          label: 'Author Image',
                          name: 'author_image',
                          type: 'image',
                        },
                        {
                          label: 'Author Name',
                          name: 'author_name',
                          type: 'string',
                        },
                        {
                          label: 'Author Profession',
                          name: 'author_profession',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
                {
                  label: 'Right Section',
                  name: 'right_section',
                  type: 'object',
                  fields: [
                    {
                      label: 'Intro',
                      name: 'intro',
                      type: 'object',
                      fields: [
                        {
                          label: 'Title',
                          name: 'title',
                          type: 'string',
                        },
                        {
                          label: 'Subtitle',
                          name: 'subtitle',
                          type: 'string',
                        },
                        {
                          label: 'Duration',
                          name: 'duration',
                          type: 'string',
                        },
                      ],
                    },
                    {
                      label: 'Contents',
                      name: 'contents',
                      type: 'object',
                      fields: [
                        {
                          label: 'List',
                          name: 'list',
                          type: 'string',
                          list: true,
                        },
                        {
                          label: 'Footnote',
                          name: 'footnote',
                          type: 'string',
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.name}` };
            },
          },
        },
      ],
    },
    {
      label: 'Who Should Apply',
      name: 'who_should_apply',
      type: 'object',
      fields: [
        {
          label: 'Enable',
          name: 'enable',
          type: 'boolean',
        },
        {
          label: 'Intro',
          name: 'intro',
          type: 'object',
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              type: 'string',
            },
          ],
        },
        {
          label: 'Main Image Title',
          name: 'main_image_title',
          type: 'string',
        },
        {
          label: 'Main Image',
          name: 'main_image',
          type: 'image',
        },
        {
          label: 'Comparison Image',
          name: 'comparison_image',
          type: 'image',
        },
        {
          label: 'Testimonial',
          name: 'testimonial',
          type: 'object',
          fields: [
            {
              label: 'Content',
              name: 'content',
              type: 'string',
            },
            {
              label: 'Customer Avatar',
              name: 'customer_avatar',
              type: 'image',
            },
            {
              label: 'Customer Name',
              name: 'customer_name',
              type: 'string',
            },
            {
              label: 'Customer Profession',
              name: 'customer_profession',
              type: 'string',
            },
          ],
        },
        {
          label: 'List',
          name: 'list',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              type: 'string',
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
        {
          label: 'Footer',
          name: 'footer',
          type: 'object',
          fields: [
            {
              label: 'Texts',
              name: 'texts',
              type: 'string',
            },
            {
              label: 'Button',
              name: 'button',
              type: 'object',
              fields: [
                {
                  label: 'Enable',
                  name: 'enable',
                  type: 'boolean',
                },
                {
                  label: 'Label',
                  name: 'label',
                  type: 'string',
                },
                {
                  label: 'Link',
                  name: 'link',
                  type: 'string',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      label: 'Paths to Success',
      name: 'paths_to_success',
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
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          label: 'Lists',
          name: 'lists',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              type: 'string',
            },
            {
              label: 'Image',
              name: 'image',
              type: 'image',
            },
            {
              label: 'Badge',
              name: 'badge',
              type: 'object',
              fields: [
                {
                  label: 'Text',
                  name: 'text',
                  type: 'string',
                },
                {
                  label: 'Color',
                  name: 'color',
                  type: 'string',
                  ui: {
                    component: 'color',
                    colorFormat: 'hex',
                    colors: [
                      '#B27A00',
                      '#1B88B0',
                      '#19AF9D',
                      '#EF767A',
                      '#C856C7',
                    ],
                    widget: 'sketch',
                  },
                },
              ],
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
      ],
    },
    {
      label: 'Why Choose Supernova',
      name: 'why_choose_supernova',
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
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          label: 'Lists',
          name: 'lists',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Icon',
              name: 'icon',
              type: 'image',
            },
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              label: 'Description',
              name: 'description',
              type: 'string',
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
      ],
    },
    {
      label: 'Call to Action',
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
        },
        {
          label: 'Subtitle',
          name: 'subtitle',
          type: 'string',
        },
        {
          label: 'Button',
          name: 'button',
          type: 'object',
          fields: [
            {
              label: 'Enable',
              name: 'enable',
              type: 'boolean',
            },
            {
              label: 'Label',
              name: 'label',
              type: 'string',
            },
            {
              label: 'Link',
              name: 'link',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      label: 'Why Supernova Exists',
      name: 'why_supernova_exists',
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
        },
        {
          label: 'Image',
          name: 'image',
          type: 'image',
        },
        {
          label: 'Image Alt',
          name: 'image_alt',
          type: 'string',
        },
        {
          label: 'Lists',
          name: 'lists',
          type: 'object',
          list: true,
          fields: [
            {
              label: 'Title',
              name: 'title',
              type: 'string',
            },
          ],
          ui: {
            itemProps: (item) => {
              return { label: `${item?.title}` };
            },
          },
        },
      ],
    },
  ],
};

export default applyPage;
