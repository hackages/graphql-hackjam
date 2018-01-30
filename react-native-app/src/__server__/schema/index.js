import {makeExecutableSchema} from 'graphql-tools';
import Stage from '../models/Stage';
import Schedule from '../models/Schedule';
import Artist from '../models/Artist';


// TODO write your first query and according resolver

const resolvers = {
  Query: {
    hello: () => "World"
  }
}
const typeDefs = `
  type Query {
    hello: String
  }
`;

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

export default schema;