const { ApolloServer, gql } = require('apollo-server')
const fetch = require('node-fetch')

const typeDefs = gql`
  type Pokemon {
    name: String!
  }
  type Query {
    getPokemon: [Pokemon]
  }
`;

const pokemon = [
  {
    name: "Charizard"
  },
  {
    name: "Pikachu"
  }
];

const resolvers = {
  Query: {
    getPokemon: () => pokemon
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});