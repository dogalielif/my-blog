import contentfulBase from './contentfulBase'

const getGlobalConfigGQL = `
  query MainConfig {
    configCollection(limit: 1) {
      total
      items {
        ${contentfulBase}
        logo {
          url
        }
        socialLinksCollection {
          total
          items {
            ${contentfulBase}
            logo {
              url
            }
            link
          }
        }
      }
    }
  }`

export default getGlobalConfigGQL
