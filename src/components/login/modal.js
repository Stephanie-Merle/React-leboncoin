import React from "react";
import Style from "./modal.module.css";
import Backdrop from "./backdrop";

const Modal = props => {
  return (
    <>
      <Backdrop action={props.action} />
      <div className={Style.modal}>
        <p className={Style.title}>Connexion</p>
        <hr />
        <form action="">
          <p>Adresse email</p>
          <div>
            <input type="text" />
          </div>
          <p>Mot de passe</p>
          <div>
            <input type="text" />
          </div>
          <button className={Style.btnBlue}>Se connecter</button>
          <hr />
          <p>Vous n'avez pas de compte ?</p>
          <button className={Style.btnWhite}>Creer un compte</button>
        </form>
      </div>
    </>
  );
};
export default Modal;
