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
      }
    }
  }`

export const getAllBlogPostsBySlugGQL = (slug) => `
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
