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

const schema = gql`
  type Pokemon {
    forms: [FormDetail]
    abilities: [Ability]
    stats: [Statistic]
    name: String!
    weight: Int!
    moves: [Move]
    sprites: Sprite
    held_items: [Item]
    location_area_encounters: String!
    height: Int!
    is_default: Boolean!
    species: SpeciesDetail
    id: Int!
    order: Int!
    game_indices: [GameIndex]
    base_experience: Int!
    types: [Type]
  }

  type Item {
    item: NameAndURL
    version_details: 
  }

  type VersionDetail {
    rarity: Int!
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

  type SpeciesDetail {
    url: String!
    name: String!
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
    move: MoveDetail
  }

  type VersionGroupDetail {
    move_learn_method: NameAndURL
    level_learned_at: Int!
    version_group: NameAndURL
  }

  type NameAndURL {
    url: String!
    name: String!
  }

  type MoveDetail {
    url: String!
    name: String!
  }

  type FormDetail {
    url: String!
    name: String!
  }

  type Ability {
    slot: Int!
    is_hidden: Boolean!
    ability: AbilityDetail
  }

  type AbilityDetail {
    url: String!
    name: String!
  }

  type Statistic {
    stat: StatisticDetail!
    effort: Int!
    base_Stat: Int!
  }

  type StatisticDetail {
    url: String!
    name: String!

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