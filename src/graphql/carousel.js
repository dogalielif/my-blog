import contentfulBase from './contentfulBase'

const carousel = `
    title
    itemsCollection {
      total
      items{
        ${contentfulBase}
        image {
          url
        }
        title
        description
        pageReference {
          ${contentfulBase}
        }
      }
    }`

export default carousel
