import React from "react";
import Style from "./wrapper.module.css";
// Wrapper block to push footer down
// 2nd level wrapping to display flex
const Wrapper = props => (
  <div className={Style.wrapper}>
    <div className={Style.flexWrapper}>{props.children}</div>
  </div>
);
export default Wrapper;
