import contentfulBase from "./contentfulBase";

const banner = `
    title
    itemsCollection {
      total
      items{
        ${contentfulBase}
        bannerImage {
          url
        }
        description
        pageReference {
          ${contentfulBase}
        }
      }
    }`;

  export default banner;