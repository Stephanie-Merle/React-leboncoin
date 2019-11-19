import React from "react";
import Logo from "../assets/Logo.svg";
import { format } from "date-fns-tz";
import Style from "./card.module.css";

const Card = props => {
  const date = new Date(props.data.created);
  const dateTime = format(date, `yyyy-MM-dd à HH:mm`);

  return (
    <div className={Style.card}>
      <div className={Style.img}>
        <img
          src={
            props.data.pictures.length > 0 ? props.data.pictures[0] : { Logo }
          }
          alt="product preview"
          onError={e => (e.target.style.display = "none")}
        />
      </div>

      <div className={Style.cardInfo}>
        <div>
          <p>{props.data.title}</p>
          <p>{props.data.price} €</p>
        </div>
        <p>{dateTime}</p>
      </div>
    </div>
  );
};
export default Card;
