import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'


export const client=sanityClient({
    projectId:'hx0yyhw0',
    dataset:'production',
    apiVersion:'2022-02-01',
    useCdn:true,
    token:'skzp9aofoR8dzhrYfBfu44LRjsg7H1M8eYdLgfjfzPWTzvm7I0AFEBCRJlJ8BggmexNtXUcUamFS3fHzbyrMnI5hUFHqwRS1RUMWHkmDS0VwTGZupXZFBBkQUVSvz3ZAPQ87CzDBjOrFG7D6PhPDcgmIUSukl9UjIShY5sUYKJc6lJWSHqQs'
})

const builder=imageUrlBuilder(client)

export const urlFor= (source)=>builder.image(source);
