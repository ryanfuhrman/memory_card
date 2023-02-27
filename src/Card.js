import React, { useState } from "react";

const Card = ({ cardInfo }) => {
  return (
    <ul>
      {cardInfo.map((card) => {
        return <li key={card.id}>{card.name}</li>;
      })}
    </ul>
  );
};

export default Card;
