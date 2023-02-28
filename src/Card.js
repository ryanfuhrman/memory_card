import React, { useState } from "react";
import "./Card.css";

const Card = ({ cardInfo }) => {
  return (
    <ul className="card-ul">
      {cardInfo.map(({ id, name, img }) => {
        return (
          <li key={id} className="card-li">
            <h1 className="card-h1">{name}</h1>
            <img src={img} className="card-img" />
          </li>
        );
      })}
    </ul>
  );
};

export default Card;
