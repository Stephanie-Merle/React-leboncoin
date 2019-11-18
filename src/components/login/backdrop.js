import React from "react";
import Style from "./backdrop.module.css";

const Backdrop = props => {
  return (
    <div
      className={Style.backdrop}
      onClick={() => {
        props.action(false);
      }}
    ></div>
  );
};
export default Backdrop;
