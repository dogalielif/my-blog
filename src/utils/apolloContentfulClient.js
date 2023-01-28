import {
  getAllBlogPostsGQL,
  getAllBlogPostsBySlugGQL,
} from '@/graphql/blogPostCollection'
import getPageGQL from '@/graphql/pageBySlug'
import getGlobalConfigGQL from '@/graphql/globalConfig'
import getMainNavigationMenuGQL from '@/graphql/mainNavigationMenu'
import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
  gql,
} from '@apollo/client'
import { onError } from '@apollo/client/link/error'

const errorLink = onError(
  ({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      console.log('graphql error', JSON.stringify(graphQLErrors))
      for (let err of graphQLErrors) {
        switch (err?.extensions?.code) {
          // Apollo Server sets code to UNAUTHENTICATED
          // when an AuthenticationError is thrown in a resolver
          case 'UNAUTHENTICATED':
            // Modify the operation context with a new token
            const oldHeaders = operation.getContext().headers
            operation.setContext({
              headers: {
                ...oldHeaders,
                authorization: getNewToken(),
              },
            })
            // Retry the request, returning the new observable
            return forward(operation)
        }
      }
    }

    // To retry on network errors, we recommend the RetryLink
    // instead of the onError link. This just logs the error.
    if (networkError) {
      console.log(`[Network error]: ${networkError}`)
    }
  },
)

const httpLink = new HttpLink({
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.ENVIRONMENT_ID}`,
  headers: {
    Authorization: 'Bearer ' + process.env.CONTENTFUL_ACCESS_TOKEN,
    'Content-Type': 'application/json',
  },
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink]),
})

export const getAllContentfulBlogPosts = async () => {
  const { data } = await client.query({
    query: gql`
      ${getAllBlogPostsGQL}
    `,
  })
  return data.blogPostCollection.items
}

export const getPage = async (pageSlug) => {
  const page = pageSlug === '/' ? '/home' : pageSlug
  const { data } = await client.query({
    query: gql`
      ${getPageGQL(page)}
    `,
  })
  return data.pageCollection.items[0]
}

export const getPostBySlug = async (slug) => {
  const { data } = await client.query({
    query: gql`
      ${getAllBlogPostsBySlugGQL(slug)}
    `,
  })
  return data.blogPostCollection.items?.[0] || []
}

export const getMainNavigationMenu = async () => {
  const { data } = await client.query({
    query: gql`
      ${getMainNavigationMenuGQL}
    `,
  })
  return data.navbarCollection.items[0]
}

export const getGlobalConfig = async () => {
  const { data } = await client.query({
    query: gql`
      ${getGlobalConfigGQL}
    `,
  })
  return data.configCollection.items[0]
}

export default client
