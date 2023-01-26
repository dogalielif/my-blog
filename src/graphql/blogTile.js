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
        tileImage {
          url
          title
          width
          height
          description
        }
        image {
          url
          title
          width
          height
          description
        }
      }
    }`

export default blogTile
