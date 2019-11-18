import React, { useState } from "react";
import Style from "./modal.module.css";
import Backdrop from "./backdrop";
import { Link } from "react-router-dom";
import Axios from "axios";
//import axios from "axios";

const Modal = props => {
  const [user, setUser] = useState({ email: "", password: "" });
  const [inputState, setInput] = useState({ email: "", password: "" });
  const [userInfo, setUserInfo] = useState({});

  const handleSubmit = e => {
    e.preventDefault();
    setUser(inputState);
    userLogin();
  };

  const userLogin = async () => {
    console.log(user);
    const res = await Axios.post(
      "https://leboncoin-api.herokuapp.com/api/user/log_in",
      {
        email: inputState.email,
        password: inputState.password
      }
    );
    console.log(res.data);
    //setUserInfo(res.data);
  };

  return (
    <>
      <Backdrop action={props.action} />
      <div className={Style.modal}>
        <p className={Style.title}>Connexion</p>
        <hr />
        <form>
          <p>Adresse email</p>
          <div>
            <input
              type="email"
              placeholder="your email"
              name="email"
              value={inputState.email}
              onChange={e => {
                setInput({ ...inputState, email: e.target.value });
              }}
            />
          </div>
          <p>Mot de passe</p>
          <div>
            <input
              type="password"
              name="password"
              placeholder="your password"
              value={inputState.password}
              onChange={e => {
                setInput({ ...inputState, password: e.target.value });
              }}
            />
          </div>
          <button
            onClick={handleSubmit}
            type="submit"
            className={Style.btnBlue}
          >
            Se connecter
          </button>
          <hr />
          <p>Vous n'avez pas de compte ?</p>
          <Link
            to="/signup"
            onClick={() => {
              props.action(false);
            }}
            className={Style.btnWhite}
          >
            Creer un compte
          </Link>
        </form>
      </div>
    </>
  );
};
export default Modal;