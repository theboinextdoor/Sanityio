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
      name: 'content',
      type: 'string',
      title: 'Content',
    }),
    defineField({
        name: 'date',
        type: 'datetime',
        title : 'Launch Schedule At',
        options : {
            dateFormat : 'YYYY-MM-DD',
            timeFormat : 'HH-mm',
            timeStep : 15,
            
        }
      }),
  ],
})
