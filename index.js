const { ApolloServer, gql } = require('apollo-server')
const fetch = require('node-fetch')
const typeDefs = require('./schema');
const baseUrl = `https://pokeapi.co/api/v2/`;

const resolvers = {
  Query: {
    async getPokemon(parent, { id }) {
      let butterFreeInfo;
      try {
        let response = await fetch(`${baseUrl}pokemon/${id}/`);
        butterFreeInfo = await response.json();
      } catch(err) {
        throw new Error(err);
      }
      return butterFreeInfo;
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
});

server.listen().then(({url}) => {
  console.log(`Server ready at ${url}`);
});