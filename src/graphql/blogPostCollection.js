import contentfulBase from './contentfulBase'

export const getAllBlogPostsGQL = `
  query BlogPosts {
    blogPostCollection {
      total
      items {
        ${contentfulBase}
        title
        slug
        tileDescription
        body {
          json
        }
        image {
          url
        }
      }
    }
  }`

export const getBlogPostsBySlugGQL = (slug) => `
  query BlogPosts {
    blogPostCollection(limit: 1, where: {slug: "${slug}"}) {
      total
      items {
        ${contentfulBase}
        title
        slug
        image {
          url
        }
        body {
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
      }
    }
  }`

export const getBlogPostsBySubCategoryGQL = (subCategoryId) => `
  query BlogPosts {
    blogPostCollection(where: {subCategory: "${subCategoryId}"}) {
      total
      items {
        ${contentfulBase}
        title
        slug
        image {
          url
        }
        tileTitle
        tileImage {
          url
        }
        tileDescription
      }
    }
  }`

export const getBlogPostsByMainCategoryGQL = (mainCategoryId) => `
  query BlogPosts {
    blogPostCollection(where: {mainCategory: {sys: {id: "${mainCategoryId}"}}}) {
      total
      items {
        ${contentfulBase}
        title
        slug
        image {
          url
        }
        tileTitle
        tileImage {
          url
        }
        tileDescription
      }
    }
  }`
