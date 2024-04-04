import { defineType} from 'sanity'

export const author = defineType({
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'author',
      type: 'string',
      title: 'Author name',
    },
    {
        name: 'description',
        title: 'Description',
        type: 'string'
    },
   {
      name: 'authorimage',
      type: 'image',
      title: 'Author Image',
      options : {
        hotspot: true,               //* for croping the image 
      }
    },
    
  ],
})
