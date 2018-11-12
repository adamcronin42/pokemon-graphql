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

    sprites:
    held_items: []
    location_area_encounters: String!
    height: Int!
    is_default: Boolean!
    species:
    id: Int!
    order: Int!
    game_indices: []
    base_experience: Int!
    types: []
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
    name: STring!
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