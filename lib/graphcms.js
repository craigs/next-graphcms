import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'

const API_ENDPOINT = 'https://api-uswest.graphcms.com/v1/cjru2guibf57u01ggsxj5ff6i/master'

const client = new ApolloClient({
  uri: API_ENDPOINT
})

export const Api = props => (
  <ApolloProvider client={client}>
    {props.children}
  </ApolloProvider>
)
