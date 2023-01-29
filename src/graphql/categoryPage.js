import contentfulBase from './contentfulBase'
import carousel from './carousel'
import blogTile from './blogTile'

const getCategoryBySlugGQL = (slug) => `
  query Category {
    postCategoryCollection(limit: 1, where: {slug: "${slug}"} ) {
      total
      items {
        ${contentfulBase}
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
            ...on Placeholder {
              ${contentfulBase}
              type
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

export default getCategoryBySlugGQL
