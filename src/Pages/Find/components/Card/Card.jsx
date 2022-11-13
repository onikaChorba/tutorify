// src/components/Card.js

import React from "react";

function Card({ person }) {
  return (
    <div>
      <img alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <div>
        <h2>{person.name}</h2>
        <p>{person.email}</p>
      </div>
    </div>
  );
}

export default Card;
