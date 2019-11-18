import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Plus from "./btn-plus";
import SearchIcon from "./search-icon";
import Login from "../assets/login.svg";

const Navbar = props => {
  return (
    <div className="header">
      <img src={Logo} alt="le bon coin logo" />
      <nav>
        <Link to="/">
          <div className="btn-post">
            <Plus /> Déposer une annonce
          </div>
        </Link>

        <Link to="/">
          <div className="btn-search">
            <SearchIcon />
            Rechercher
          </div>
        </Link>
        <div className="btn-login">
          <img src={Login} alt="login" />
          <button
            onClick={() => {
              props.action(true);
            }}
          >
            Se connecter
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
