
import {defineType,defineField,defineArrayMember} from 'sanity'

export const post = defineType({
    name: 'post',
    type: 'document',
    title: 'Post',
     fields: [
        defineField({
            name: 'title',
            type: 'string',
            title: 'Post Title'
        }),

        //Slug Field

        defineField({
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation:Rule=>Rule.required()
        }),
       
        //Summary Field

        defineField({
            name: 'summary',
            type: 'text',
            title: 'Summary',
            validation:Rule=>Rule.required(),
        }),
       
        //Image Field
        defineField({
            name: 'image',
            type: 'image',
            title: 'Image',
        }),

         //Block Field
         defineField({
            name: 'content',
            title: 'Content',
            type: 'array',
            of:[
             defineArrayMember({type: 'block'})
            ]
        
        }),
        
        //Author 
        defineField({
            name: 'author',
            type: 'reference',
            title: 'Author',
            to: [
                {
                    type: 'author'
                }
            ]

        })


     ]

})