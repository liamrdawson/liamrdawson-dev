import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

const httpLink = createHttpLink({
  uri: 'https://api.github.com/graphql',
})

const authLink = setContext((_, { headers }) => {
  const githubToken = process.env['GITHUB']
  // Return headers to context so HttpLink can read them
  return {
    headers: {
      ...headers,
      authorization: githubToken ? `Bearer ${githubToken}` : '',
    },
  }
})

const githubClient = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})

export default githubClient
