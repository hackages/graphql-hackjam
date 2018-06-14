import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3010/graphql' }),
  cache: new InMemoryCache(),
});

// TODO just export the client
// The purpose is the look how a client is created. Don't hesitate to ask questions or look at the docs:
// https://www.apollographql.com/docs/react/basics/network-layer.html
export default {};
