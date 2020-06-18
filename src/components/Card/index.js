import React from "react";
import "./style.scss";

function Card({ title, description }) {
  return (
    <div className='cardContainer'>
      <h3>{title}</h3>
      <h5>{description}</h5>
    </div>
  );
}

export default Card;
