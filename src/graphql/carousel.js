import contentfulBase from './contentfulBase'

const carousel = `
    title
    itemsCollection {
      total
      items{
        ${contentfulBase}
        image {
          url
          title
          width
          height
          description
        }
        title
        description
        pageReference {
          ${contentfulBase}
        }
      }
    }`

export default carousel
