import gql from 'graphql-tag';

export const QUERY_GAMES = gql`
    query {
        games {
            _id
            username
            winner
            loser
            createdAt
        }
    }
`;

export const QUERY_GAME = gql`
    query($_id: ID!) {
        game(_id: $_id) {
            username
            winner
            loser
            createdAt
        }
    }
`;

export const QUERY_USERS = gql`
    query {
        users {
            username
            email
            games {
                username
                winner
                loser
                createdAt
            }
        }
    }
`;

export const QUERY_USER = gql`
    query($username: String!) {
        user(username: $username) {
            username
            email
            games {
                _id
                username
                winner
                loser
                createdAt
            }
        }
    }
`;

export const QUERY_ME = gql`
    query {
        me {
            username
            email
            games {
                username
                winner
                loser
                createdAt
            }
        }
    }
`;
