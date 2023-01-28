import contentfulBase from './contentfulBase'

const blogTile = `
    title
    blogItemsCollection {
      total
      items{
        ...on MainCategory {
          ${contentfulBase}
          slug
          tileTitle
          tileDescription
          tileImage {
            url
            title
            width
            height
            description
          }
        }
        ...on BlogPost {
          ${contentfulBase}
          slug
          tileTitle
          tileDescription
          tileImage {
            url
            title
            width
            height
            description
          }
          title
          image {
            url
            title
            width
            height
            description
          }
        }
      }
    }`

export default blogTile
