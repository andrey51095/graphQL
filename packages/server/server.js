const { GraphQLServer } = require('graphql-yoga')

const {resolvers} = require('./src/graphQL/resolvers');
const schemas = require('./src/database/schemas');

module.exports = new GraphQLServer({
  typeDefs: './src/graphQL/schema.graphql',
  resolvers,
  context: schemas,
});
