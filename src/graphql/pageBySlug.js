import contentfulBase from './contentfulBase'
import carousel from './carousel'
import blogTile from './blogTile'

const getPageGQL = (page) => `
  query Page {
    pageCollection(limit: 1, where: {slug: "${page}"} ) {
      total
      items {
        title
        text {
          json
          links {
            assets {
              block {
                sys {
                  id
                }
                url
                title
                width
                height
                description
              }
            }
          }
        }
        blocksCollection(limit: 10) {
          items {
            ...on Carousel {
              ${contentfulBase}
              ${carousel}
            }
            ...on BlogTiles {
              ${contentfulBase}
              ${blogTile}
            }
            ...on ParallaxImage {
              ${contentfulBase}
              width
              text
              textColor
              image {
                url
                title
                width
                height
                description
              }
            }
          }
        }
      }
    }
  }`

export default getPageGQL
