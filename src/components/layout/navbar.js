import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Plus from "../btn-plus";
import SearchIcon from "../search-icon";
import Login from "../../assets/login.svg";
import Cookies from "js-cookie";
import Style from "./navbar.module.css";
import {
  AddBoxOutlined,
  SearchOutlined,
  PermIdentityOutlined
} from "@material-ui/icons";

const Navbar = props => {
  let userName = Cookies.get("username");
  let connected = Cookies.get("token");
  return (
    <div className={Style.header}>
      <Link to="/">
        <img src={Logo} alt="le bon coin logo" />
      </Link>
      <nav>
        <Link to="/">
          <div className="btnPost">
            <AddBoxOutlined /> Déposer une annonce
          </div>
        </Link>

        <Link to="/">
          <div className={Style.btnSearch}>
            <SearchOutlined />
            Rechercher
          </div>
          {connected ? "Bonjour " + userName : null}
        </Link>
        <div className={Style.btnLogin}>
          <PermIdentityOutlined />
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
