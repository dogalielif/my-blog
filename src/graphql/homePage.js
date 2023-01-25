import contentfulBase from "./contentfulBase";
import banner from "./banner";

const getHomePageGQL = `
  query HomePage {
    pageCollection(limit: 1, where: {slug: "/home"} ) {
      total
      items {
        title
        blocksCollection(limit: 10) {
          items {
            ...on Banner {
              ${contentfulBase}
              ${banner}
            }
          }
        }
      }
    }
  }`;

  export default getHomePageGQL;