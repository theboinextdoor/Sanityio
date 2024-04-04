import {defineType, defineField} from 'sanity'

export const blog = defineType({
  name: 'blog',
  title: 'Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      type: 'string',
      title: 'Title',
    }),
    defineField({
      name: 'metadescription',
      type: 'string',
      title: 'Meta Description',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description:
                'Some of your visitor cannot see the images, be they blink , color-blind, low-sighted',
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
    }),

    defineField({
      title: 'Blog Image',
      name: 'blogimage',
      type: 'image',
      options: {
        hotspot: true, // <-- Defaults to false
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
        },
        {
          name: 'attribution',
          type: 'string',
          title: 'Attribution',
        },
      ],
    }),
    defineField({
        name: 'date',
        type: 'datetime',
        title: 'Created at',
        options: {
          dateFormat: 'YYYY-MM-DD',
          timeFormat: 'HH-mm',
          timeStep: 15,
        },
      }),
      defineField({
        title: 'Author',
        name: 'author',
        type: 'object',
        fields:[
            {
                title: 'Author',
                name: 'author',
                type: 'reference',
                to:[
                    {
                        type: 'author'
                    }
                ]
            }
        ]

        

      })
  ],
})
