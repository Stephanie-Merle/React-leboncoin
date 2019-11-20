import React from "react";
import Logo from "../assets/Logo.svg";
import { format } from "date-fns-tz";
import Style from "./card-detail.module.css";
import Wrapper from "./layout/wrapper";
import { ShoppingCartOutlined } from "@material-ui/icons";

const CardDetail = props => {
  const date = new Date(props.created);
  const dateTime = format(date, `yyyy-MM-dd à HH:mm`);

  return (
    <Wrapper>
      <div className={Style.cardDetail}>
        <div className={Style.cardDisplay}>
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

        <p className={Style.description}>{props.description}</p>
      </div>

      <div className={Style.cart}>
        <p className={Style.name}>{props.creator.account.username}</p>
        <button className="btnPost">
          {" "}
          <ShoppingCartOutlined />
          Ajouter a mon panier
        </button>
      </div>
    </Wrapper>
  );
};
export default CardDetail;
