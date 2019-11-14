import React from "react";
import "./App.css";
import "./reset.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Offers from "./containers/offers";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/">
            <Offers />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};
export default App;
