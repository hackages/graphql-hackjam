import { ApolloClient, createNetworkInterface } from 'apollo-client';

//'https://api.graph.cool/simple/v1/cj1ufizxi5lgy0109064uyi7i'
// TODO create a new client with the above uri
const client = new ApolloClient();


export function provideClients() {
  return client;
}


