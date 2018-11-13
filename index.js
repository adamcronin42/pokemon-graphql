const { ApolloServer, gql } = require('apollo-server')
const fetch = require('node-fetch')

const typeDefs = gql`
  type Pokemon {
    forms: [NameAndURL]
    abilities: [Ability]
    stats: [Statistic]
    name: String!
    weight: Int
    moves: [Move]
    sprites: Sprite
    held_items: [Item]
    location_area_encounters: LocationAreaEncounter
    height: Int
    is_default: Boolean
    species: NameAndURL
    id: Int!
    order: Int
    game_indices: [GameIndex]
    base_experience: Int
    types: [Type]
  }

  type LocationAreaEncounter {
    location_area: NameAndURL
    version_details: [VersionDetail]
  }

  type EncounterDetail {
    min_level: Int
    max_level: Int
    condition_values: [NameAndURL]
    chance: Int
    method: NameAndURL
  }

  type VersionDetail {
    max_chance: Int
    encounter_details: [EncounterDetail]
    version: NameAndURL
  }

  type Item {
    item: NameAndURL
    version_details: ItemVersionDetail
  }

  type ItemVersionDetail {
    rarity: Int
    version: NameAndURL
  }

  type GameIndex {
    version: NameAndURL
    game_index: Int!
  }

  type Type {
    slot: Int!
    type: NameAndURL
  }

  type Sprite {
    back_femaile: String
    back_shiny_female: String
    back_default: String
    front_female: String
    front_shiny_female: String
    back_shiny: String
    front_default: String
    front_shiny: String
  }

  type Move {
    version_group_details: [VersionGroupDetail]
    move: NameAndURL
  }

  type VersionGroupDetail {
    move_learn_method: NameAndURL
    level_learned_at: Int
    version_group: NameAndURL
  }

  type NameAndURL {
    url: String!
    name: String!
  }

  type Ability {
    slot: Int
    is_hidden: Boolean!
    ability: NameAndURL
  }

  type Statistic {
    stat: NameAndURL
    effort: Int
    base_Stat: Int
  }

  type Query {
    getButterfree: Pokemon
  }
`;

const resolvers = {
  Query: {
    async getButterfree() {
      let butterFreeInfo;
      try {
        let response = await fetch('https://pokeapi.co/api/v2/pokemon/butterfree/');
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