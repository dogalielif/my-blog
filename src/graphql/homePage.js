import contentfulBase from './contentfulBase'
import carousel from './carousel'
import blogTile from './blogTile'

const getHomePageGQL = `
  query HomePage {
    pageCollection(limit: 1, where: {slug: "/home"} ) {
      total
      items {
        title
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

export default getHomePageGQL
