import React, { useState, useEffect } from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Offers from "./containers/offers";
import Offer from "./containers/offer";
import Modal from "./components/login/modal";
import SignUp from "./containers/signup";
import Cookies from "js-cookie";

const App = () => {
  const [showModal, setModal] = useState(false);
  const [user, setUser] = useState();

  useEffect(() => {
    if (user) {
      const token = user.token;
      const username = user.account.username;
      const email = user.email;
      Cookies.set("token", token, { expires: 7 });
      Cookies.set("username", username, { expires: 7 });
      Cookies.set("email", email, { expires: 7 });
    }
  }, [user]);

  const endConnection = () => {
    Cookies.remove("token");
    Cookies.remove("username");
    Cookies.remove("email");
    setUser(null);
  };

  return (
    <Router>
      {showModal ? <Modal action={setModal} user={setUser} /> : null}
      <Navbar action={setModal} user={user} close={endConnection} />
      <div>
        <Switch>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/offer/:id">
            <Offer />
          </Route>
          <Route path="/signup">
            <SignUp />
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
