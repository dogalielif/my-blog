import contentfulBase from "./contentfulBase";
import carousel from "./carousel";

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
          }
        }
      }
    }
  }`;

  export default getHomePageGQL;