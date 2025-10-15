import React from "react";

const Card = ({ title, des }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <p>{des}</p>
      <div className="img"></div>
    </div>
  );
};

export default Card;
