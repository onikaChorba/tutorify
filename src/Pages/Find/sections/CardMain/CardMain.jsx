import React from "react";
import { useState } from "react";
import "./CardMain.scss";
import CardMainInfo from "../CardMainInfo/CardMainInfo";
import Button from "@/components/Button/Button";
import { CardImg } from "../../components/CardImg/CardImg";
import { CardNumberLessons } from "../../components/CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "@/Pages/Find/components/CardSpeack /CardSpeack";
import CardFrom from "../../components/CardFrom/CardFrom.jsx";
import { CardStudent } from "../../components/CardStudent/CardStudent";
import { CardName } from "../../components/CardName/CardName";
import { FormFreeLessons } from "@/components/Form/FormFreeLessons/FormFreeLessons";
import { ProfileInfo } from "../ProfileInfo/ProfileInfo";

function CardMain({ person }) {
  // Free Lessons
  const [isShowFreeLessons, setIsShowFreeLessons] = useState(false);
  const handleClickShowFreeLessons = () => {
    setIsShowFreeLessons((current) => !current);
  };

  // show Profile Info
  const [isShowProfile, setIsShowProfile] = useState(false);
  const handleClickShowProfile = () => {
    setIsShowProfile((current) => !current);
  };

  const showLessons = {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10%",
  };
  return (
    <section>
      <div className="cardMain">
        <div className="card">
          <div style={{ paddingLeft: "31px", paddingRight: "31px" }}>
            <CardImg person={person} />
            <CardNumberLessons />
            <div>
              <CardName person={person} />
              <CardSpeack person={person} />
              <div className="cardFrom">
                <CardFrom person={person} />
              </div>
              <div
                style={{ display: "flex", justifyContent: "spase-beetwean" }}
              >
                <CardStudent />
                <button
                  onClick={handleClickShowFreeLessons}
                  className="cardButton"
                >
                  <Button green small>
                    <span className="button__text "> Book</span>
                  </Button>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div style={isShowFreeLessons ? showLessons : null}>
          {isShowFreeLessons && <FormFreeLessons />}
        </div>
        <div className="cardMainInfo">
          <CardMainInfo person={person} id={person.id} />
          <button
            onClick={handleClickShowProfile}
            className="cardMainInfo__button"
          >
            <Button green small>
              <span className="button__text ">Read More</span>
            </Button>
          </button>
        </div>
      </div>
      {isShowProfile && <ProfileInfo person={person} />}
    </section>
  );
}

export default CardMain;
