import React from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import YourHomePage from "./pages/YourHomePage";
import SecondaryPage from "./pages/SecondaryPage";
import NoMatch from "./pages/NoMatch";


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
            <Router>
                <Switch>
                    <Route exact path="/" component={YourHomePage} />
                    <Route exact path="/saved" component={SecondaryPage} />
                    <Route component={NoMatch} />
                </Switch>
            
            </Router>
        </ApolloProvider>
    );
}

export default App;
