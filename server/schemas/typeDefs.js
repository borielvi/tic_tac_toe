const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        games: [Game]
    }

    type Game {
        _id: ID
        username: String
        winner: String
        loser: String
        createdAt: String
    }

    type Query {
        me: User
        users: [User]
        user(username: String!): User
        games(username: String): [Game]
        game(_id: ID!): Game
    }

    type Auth {
        token: ID!
        user: User
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addGame(winner: String!, loser: String!): Game
    }
`

module.exports = typeDefs;