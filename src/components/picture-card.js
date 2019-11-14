import React from "react";

const PictureCard = props => {
  const n = props.pics;
  const listing = n.map(el => <p>{el}</p>);
  return <div>{listing}</div>;
};
export default PictureCard;
