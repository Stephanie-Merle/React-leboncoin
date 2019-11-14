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
      <footer>
        <p>
          Made with love ✨
          <a href="https://github.com/Stephanie-Merle/">
            ⭐️ CHECK SOURCE CODE HERE ⭐️
          </a>
          ✨ Project from Le Reacteur Paris
        </p>
      </footer>
    </Router>
  );
};
export default App;
