import contentfulBase from './contentfulBase'

const getNavigationMenuGQL = `
  query Navbar {
    navbarCollection(limit: 1) {
      total
      items {
        navbarItemsCollection {
          total
          items {
            ...on MainCategory {
              ${contentfulBase}
              slug
              navbarTitle
            }
            ...on NavigationItem {
              ${contentfulBase}
              slug
              navbarTitle
            }
          }
        }
      }
    }
  }`

export default getNavigationMenuGQL
