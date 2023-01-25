import contentfulBase from './contentfulBase';

const getAllBlogPostsGQL = `
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
  }`;

  export default getAllBlogPostsGQL;