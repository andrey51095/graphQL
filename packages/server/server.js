const { GraphQLServer } = require('graphql-yoga')

const {resolvers} = require('./src/graphQL');

module.exports = new GraphQLServer({
  typeDefs: './src/graphQL/schema.graphql',
  resolvers,
});
