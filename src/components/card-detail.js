import React from "react";
import Logo from "../assets/Logo.svg";
import { format } from "date-fns-tz";
import Style from "./card-detail.module.css";

const CardDetail = props => {
  const date = new Date(props.created);
  const dateTime = format(date, `yyyy-MM-dd à HH:mm`);

  return (
    <div className={Style.cardDetail}>
      <div className={Style.img}>
        <img
          src={props.pictures.length > 0 ? props.pictures[0] : { Logo }}
          alt="product preview"
          onError={e => (e.target.style.display = "none")}
        />
      </div>

      <div className={Style.cardDetailInfo}>
        <div>
          <p>{props.title}</p>
        </div>
        <div>
          <p>{props.price} €</p>
        </div>
        <div>
          <p>{dateTime}</p>
        </div>
      </div>
    </div>
  );
};
export default CardDetail;
