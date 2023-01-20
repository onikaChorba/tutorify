import React from "react";

import "./CardMain.scss";

import CardInfo from "../CardStore/CardInfo";
import Button from "../../../../../components/Button";
import { CardImg } from "./CardImg/CardImg";
import { CardNumberLessons } from "./CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "./CardSpeack /CardSpeack";
import CardFrom from "../CardMain/CardFrom/CardFrom.jsx";
import { CardStudent } from "./CardStudent/CardStudent";
import { CardName } from "./CardName/CardName";

function Card({ person }) {
  return (
    <section className="cardMain">
      <div className="card">
        <CardImg person={person} />
        <div style={{ paddingLeft: "31px" }}>
          <CardNumberLessons />
          <div>
            <CardName person={person} />
            <CardSpeack person={person} />
            <div className="cardFrom">
              <CardFrom person={person} />
            </div>
            <div style={{ display: "flex", justifyContent: "spase-beetwean" }}>
              <CardStudent />
              <div className="cardButton">
                <Button green small>
                  <span className="button__text "> Book</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="cardMainInfo">
        <CardInfo person={person} />
      </div>
    </section>
  );
}

export default Card;
