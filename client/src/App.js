import React from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
/*
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import YourHomePage from "./pages/YourHomePage";
import SecondaryPage from "./pages/SecondaryPage";
import NoMatch from "./pages/NoMatch";
*/
import Game from "./components/Game"


const client = new ApolloClient({
    request: operation => {
        const token = localStorage.getItem('id_token');

        operation.setContext({
            headers: {
                authorization: token ? `Bearer ${token}` : ''
            }
        })
    },
    uri: '/graphql'
});


function App() {
    return (
        <ApolloProvider client={client}>
            <Game/>
        </ApolloProvider>
    );
}

export default App;
