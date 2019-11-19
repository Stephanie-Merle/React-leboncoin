import React from "react";
import Style from "./signup-card.module.css";
import { Schedule, NotificationsNone, Visibility } from "@material-ui/icons";

const SignupCard = () => {
  return (
    <>
      <div className={Style.signupCard}>
        <div className={Style.icon}>
          <Schedule />
        </div>
        <div>
          <p>Gagner du temps</p>
          <p>
            Publiez vos annonces rapidement, avec vos informations pré-remplies
            chaque fois que vous souhaitez déposer une nouvelle annonce.
          </p>
        </div>
      </div>
      <div className={Style.signupCard}>
        <div className={Style.icon}>
          <NotificationsNone />
        </div>
        <div>
          <p>Soyez les premiers informes</p>
          <p>
            Créez des alertes Immo ou Emploi et ne manquez jamais l’annonce qui
            vous intéresse.
          </p>
        </div>
      </div>
      <div className={Style.signupCard}>
        <div className={Style.icon}>
          <Visibility />
        </div>
        <div>
          <p>Visibilite</p>
          <p>
            Suivez les statistiques de vos annonces (nombre de fois où votre
            annonce a été vue, nombre de contacts reçus).
          </p>
        </div>
      </div>
    </>
  );
};
export default SignupCard;
