import { ApolloClient, InMemoryCache } from '@apollo/client'

export const clientGraphql = new ApolloClient({
  uri: 'https://fake-api.avantstay.dev/graphql',
  cache: new InMemoryCache(),
})
