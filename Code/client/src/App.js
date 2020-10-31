import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import YourHomePage from "./pages/YourHomePage";
import SecondaryPage from "./pages/SecondaryPage";
import NoMatch from "./pages/NoMatch";


function App() {
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={YourHomePage} />
          <Route exact path="/saved" component={SecondaryPage} />
          <Route component={NoMatch} />
        </Switch>
      
    </Router>
  );
}

export default App;
