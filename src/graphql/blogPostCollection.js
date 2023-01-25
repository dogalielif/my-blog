const getAllBlogPosts = `
  query BlogPosts {
    blogPostCollection {
      total
      items {
        sys {
          id
        }
        title
        slug
        tileDescription
        body {
          json
        }
      }
    }
  }`;

  export default getAllBlogPosts;