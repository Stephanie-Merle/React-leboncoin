import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import Plus from "./btn-plus";
import SearchIcon from "./search-icon";
import Login from "../assets/login.svg";
import Cookies from "js-cookie";
import Style from "./navbar.module.css";

const Navbar = props => {
  let userName = Cookies.get("username");
  let connected = Cookies.get("token");
  return (
    <div className={Style.header}>
      <img src={Logo} alt="le bon coin logo" />
      <nav>
        <Link to="/">
          <div className={Style.btnPost}>
            <Plus /> Déposer une annonce
          </div>
        </Link>

        <Link to="/">
          <div className={Style.btnSearch}>
            <SearchIcon />
            Rechercher
          </div>
          {connected ? "Bonjour " + userName : null}
        </Link>
        <div className={Style.btnLogin}>
          <img src={Login} alt="login" />
          {connected ? (
            <button
              onClick={() => {
                props.close();
              }}
            >
              Se deconnecter
            </button>
          ) : (
            <button
              onClick={() => {
                props.action(true);
              }}
            >
              Se connecter
            </button>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
