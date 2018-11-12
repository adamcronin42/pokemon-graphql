const { ApolloServer, gql } = require('apollo-server')
const fetch = require('node-fetch')

const typeDefs = gql`
  #schema goes here
`;

const resolvers = {
  //resolvers go here
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});