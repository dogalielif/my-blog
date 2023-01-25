import getAllBlogPosts from "@/graphql/blogPostCollection";
import { ApolloClient, InMemoryCache, HttpLink, from, ApolloLink, gql } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
  if (graphQLErrors) {
    for (let err of graphQLErrors) {
      switch (err.extensions.code) {
        // Apollo Server sets code to UNAUTHENTICATED
        // when an AuthenticationError is thrown in a resolver
        case "UNAUTHENTICATED":
          // Modify the operation context with a new token
          const oldHeaders = operation.getContext().headers;
          operation.setContext({
            headers: {
              ...oldHeaders,
              authorization: getNewToken(),
            },
          });
          // Retry the request, returning the new observable
          return forward(operation);
      }
    }
  }

  // To retry on network errors, we recommend the RetryLink
  // instead of the onError link. This just logs the error.
  if (networkError) {
    console.log(`[Network error]: ${networkError}`);
  }
});

const httpLink = new HttpLink({ 
  uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.ENVIRONMENT_ID}`,
  headers: {
    Authorization: "Bearer " + process.env.CONTENTFUL_ACCESS_TOKEN,
    "Content-Type": "application/json",
  }
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, httpLink])
});

export const getAllContentfulBlogPosts = async () => {
  const { data } = await client.query({
  query: gql`
    ${getAllBlogPosts}`,
  });
  return data.blogPostCollection.items;
}

export default client;