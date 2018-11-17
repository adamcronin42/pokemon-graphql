const fetch = require('node-fetch');
const baseUrl = `https://pokeapi.co/api/v2/`;

module.exports = {
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