import React from "react";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import NoMatch from "./pages/NoMatch";

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
            <Router>
                <Switch>
                    <Route exact path='/' component={Game}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/signup' component={Signup}/>
                    <Route exact path='/login' component={Login}/>

                    <Route component={NoMatch}/>
                </Switch>
            </Router>
        </ApolloProvider>
    );
}

export default App;
