import contentfulBase from './contentfulBase'

const getMainCategoryBySlugGQL = (slug) => `
  query MainCategory {
    mainCategoryCollection(limit: 1, where: {slug: "${slug}"}) {
      total
      items {
        ${contentfulBase}
        subCategoriesCollection {
          total
          items {
            ${contentfulBase}
            slug
            tileTitle
            tileImage {
              url
            }
            tileDescription
          }
        }
      }
    }
  }`

export default getMainCategoryBySlugGQL
