import React, { useState, useHistory } from "react";
import Style from "./signup.module.css";
import axios from "axios";

// TODO add a confirmation message of sign up with click to back to main page (useHistory)
// TODO handle HTTP request errors

const SignUp = props => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password1: "",
    password2: "",
    agree: false
  });

  const checkData = e => {
    e.preventDefault();
    if (input.password1 === input.password2 && input.agree === true) {
    }
    console.log(input);
    handleSubscription();
  };

  const handleSubscription = async () => {
    const res = await axios.post(
      "https://leboncoin-api.herokuapp.com/api/user/sign_up",
      {
        email: input.email,
        username: input.name,
        password: input.password1
      }
    );
    console.log(res.data);
  };
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
          <p className={Style.title}>Creez un compte</p>
          <hr />
          <form>
            <p>Pseudo</p>
            <div>
              <input
                type="text"
                placeholder="your pseudo"
                name="name"
                onChange={e => setInput({ ...input, name: e.target.value })}
              />
            </div>
            <p>Adresse email</p>
            <div>
              <input
                type="email"
                placeholder="your email"
                name="name"
                onChange={e => setInput({ ...input, email: e.target.value })}
              />
            </div>
            <p>Mot de passe</p>
            <div>
              <input
                type="password"
                name="password1"
                placeholder="your password"
                onChange={e =>
                  setInput({ ...input, password1: e.target.value })
                }
              />
            </div>
            <p>Confirmer Mot de passe</p>
            <div>
              <input
                type="password"
                name="password2"
                placeholder="your password"
                onChange={e =>
                  setInput({ ...input, password2: e.target.value })
                }
              />
            </div>
            <input
              type="checkbox"
              name="CGV-CGU"
              value={!input.agree}
              onChange={e => setInput({ ...input, agree: !input.agree })}
            />{" "}
            J'accepte les conditions generale de vente et les conditions
            generales d'utilisation.{" "}
            <button
              type="submit"
              className={Style.btnBlue}
              onClick={e => checkData(e)}
            >
              Creer mon compte
            </button>
            <hr />
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
