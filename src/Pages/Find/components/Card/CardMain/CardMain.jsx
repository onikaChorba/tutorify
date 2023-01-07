import React from "react";

import "./CardMain.scss";

import CardInfo from "../CardStore/CardInfo";

import { CardImg } from "./CardImg/CardImg";
import { CardNumberLessons } from "./CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "./CardSpeack /CardSpeack";
import { CardFrom } from "./CardFrom/CardFrom";
import { CardStudent } from "./CardStudent/CardStudent";
import { CardName } from "./CardName/CardName";

function Card({ person }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="card">
        <CardImg person={person} />
        <div style={{ paddingLeft: "31px" }}>
          <CardNumberLessons />
          <div>
            <CardName person={person} />
            <CardSpeack person={person} />
            <CardFrom person={person} />
            <CardStudent />
          </div>
        </div>
      </div>
      <div style={{ width: "43%", marginTop: "66px" }}>
        <CardInfo person={person} />
      </div>
    </div>
  );
}

export default Card;
