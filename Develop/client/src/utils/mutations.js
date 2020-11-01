import gql from 'graphql-tag';

export const LOGIN_USER = gql`
    mutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            user {
                username
                email
            }
        }
    }
`;

export const ADD_USER = gql`
    mutation($username: String!, $password: String!, $email: String!) {
        addUser(username: $username, password: $password, email: $email) {
            token
            user {
                username
                email
            }
        }
    }
`;

export const ADD_GAME = gql`
    mutation($winner: String!, $loser: String!) {
        addGame(winner: $winner, loser: $loser) {
            username
            winner
            loser
            createdAt
        }
    }
`;
