import React from "react";
import Style from "./signup.module.css";
// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Spinner from "../components/spinner";

const SignUp = () => {
  return (
    <div className={Style.signup}>
      <div className={Style.layout}>
        <div className={Style.left}>
          <h3>Pourquoi creer un compte ?</h3>
          <p>Gagner du temps</p>
          <p>
            Publiez vos annonces rapidement, avec vos informations pré-remplies
            chaque fois que vous souhaitez déposer une nouvelle annonce.
          </p>
          <p>Soyez les premiers informes</p>
          <p>
            Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce qui
            vous intéresse.
          </p>
          <p>Visibilite</p>
          <p>
            Suivez les statistiques de vos annonces (nombre de fois où votre
            annonce a été vue, nombre de contacts reçus).
          </p>
        </div>
        <div className={Style.right}>
          <p className={Style.title}>Connexion</p>
          <hr />
          <form>
            <p>Adresse email</p>
            <div>
              <input type="email" placeholder="your email" name="email" />
            </div>
            <p>Mot de passe</p>
            <div>
              <input
                type="password"
                name="password"
                placeholder="your password"
              />
            </div>
            <button type="submit" className={Style.btnBlue}>
              Se connecter
            </button>
            <hr />
            <p>Vous n'avez pas de compte ?</p>
            <button to="/signup">Creer un compte</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
