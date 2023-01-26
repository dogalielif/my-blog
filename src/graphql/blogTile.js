import contentfulBase from './contentfulBase'

const blogTile = `
    title
    blogItemsCollection {
      total
      items{
        ${contentfulBase}
        slug
        title
        tileDescription
        image {
          url
        }
      }
    }`

export default blogTile
