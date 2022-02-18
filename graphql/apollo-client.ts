import { ApolloClient, InMemoryCache, ApolloProvider, useQuery, gql, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  // Get auth token
  const githubToken = process.env['GITHUB']
  // Return headers to context so HttpLink can read them
  return {
    headers: {
      ...headers,
      authorization: githubToken ? `Bearer ${githubToken}` : '',
    },
  }
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default client
