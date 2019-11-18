import React from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Offers from "./containers/offers";
import Offer from "./containers/offer";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/">
            <Offers />
          </Route>
        </Switch>
      </div>
      <footer>
        <p>
          Made with love{" "}
          <span role="img" aria-label="star">
            ✨{" "}
          </span>
          <a href="https://github.com/Stephanie-Merle/">
            <span role="img" aria-label="star">
              {" "}
              ⭐️{" "}
            </span>{" "}
            CHECK SOURCE CODE HERE
            <span role="img" aria-label="star">
              {" "}
              ⭐️{" "}
            </span>
          </a>
          <span role="img" aria-label="star">
            ✨{" "}
          </span>{" "}
          Project from Le Reacteur Paris
        </p>
      </footer>
    </Router>
  );
};
export default App;
