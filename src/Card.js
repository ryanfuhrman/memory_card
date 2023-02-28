import React, { useState } from "react";
import "./Card.css";

const Card = ({ cardInfo, handleCount }) => {
  return (
    <ul className="card-ul">
      {cardInfo.map(({ id, name, img }) => {
        return (
          <li key={id} className="card-li" id={id}>
            <h1 className="card-h1">{name}</h1>
            <img src={img} className="card-img" onClick={handleCount} id={id} />
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
