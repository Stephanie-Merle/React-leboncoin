import React from "react";
import Logo from "../assets/Logo.svg";
import { format } from "date-fns-tz";

const CardDetail = props => {
  const date = new Date(props.created);
  const dateTime = format(date, `yyyy-MM-dd à HH:mm`);

  return (
    <div className="cardDetail">
      <div className="img">
        <img
          src={props.pictures.length > 0 ? props.pictures[0] : { Logo }}
          alt="product preview"
          onError={e => (e.target.style.display = "none")}
        />
      </div>

      <div className="cardDetail-info">
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
