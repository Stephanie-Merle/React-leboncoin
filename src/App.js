import React, { useState, useEffect, lazy, Suspense } from "react";
import "./reset.css";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Offers from "./containers/offers";
import Modal from "./components/login/modal";
import SignUp from "./containers/signup";
import Spinner from "./components/spinner";
import Cookies from "js-cookie";
// Lazy import of Offer component
const Offer = lazy(() => import("./containers/offer"));
// Using context for authentication status?
//import { BasketProvider } from "./context/context";
// <BasketProvider /> <BasketConsumer />

const App = () => {
  const [showModal, setModal] = useState(false);
  // Get info if authenticated, Token / username / email
  const [user, setUser] = useState();

  useEffect(() => {
    // If authenticated storing information in a cookie
    if (user) {
      const token = user.token;
      const username = user.account.username;
      const email = user.email;
      Cookies.set("token", token, { expires: 7 });
      Cookies.set("username", username, { expires: 7 });
      Cookies.set("email", email, { expires: 7 });
    }
  }, [user]);
  // Remove cookies if authentication is set to false
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
          <Route path="/offers" component={Offers} />
          <Route
            path="/offer/:id"
            render={() => (
              <Suspense fallback={Spinner}>
                {" "}
                <Offer />{" "}
              </Suspense>
            )}
          />
          <Route path="/signup" component={SignUp} />
          <Route path="/" component={Offers} />
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
