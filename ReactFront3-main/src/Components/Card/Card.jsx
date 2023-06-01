import React from "react";
import cardStyle from "./Card.module.css";

export const Card = ({ name, nationality }) => {
  return (
    <div className={cardStyle.cardBox}>
      <h3>¡Hola, {name}!</h3>
      <p>Tu nacionalidad, {nationality}, fue registrada con éxito.</p>
    </div>
  );
};
