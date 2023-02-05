import React from "react";
import { useState } from "react";
import "./CardMain.scss";
import CardInfo from "../CardStore/CardInfo";
import Button from "../../../../../components/Button";
import { CardImg } from "./CardImg/CardImg";
import { CardNumberLessons } from "./CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "./CardSpeack /CardSpeack";
import CardFrom from "../CardMain/CardFrom/CardFrom.jsx";
import { CardStudent } from "./CardStudent/CardStudent";
import { CardName } from "./CardName/CardName";
import { FormFreeLessons } from "@/components/Form/FormFreeLessons/FormFreeLessons";
import { ProfileInfoCard } from "../../../../FindProfile/components/ProfileInfoCard/ProfileInfoCard";
import { ProfileInfoBadge } from "../../../../FindProfile/components/ProfileInfoBadge/ProfileInfoBadge";
function Card({ person }) {
  //useState Free Lessons
  const [isShowFreeLessons, setIsShowFreeLessons] = useState(false);
  const handleClickShowFreeLessons = () => {
    setIsShowFreeLessons((current) => !current);
  };

  //useState show Profile Info
  const [isShowProfile, setIsShowProfile] = useState(false);
  const handleClickShowProfile = () => {
    setIsShowProfile((current) => !current);
  };
  return (
    <section>
      <div className="cardMain">
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
              <div
                style={{ display: "flex", justifyContent: "spase-beetwean" }}
              >
                <CardStudent />
                <div className="cardButton">
                  <button onClick={handleClickShowFreeLessons}>
                    <Button green small>
                      <span className="button__text "> Book</span>
                    </Button>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          style={
            isShowFreeLessons
              ? {
                  display: "flex",
                  justifyContent: "center",
                  paddingTop: "10%",
                }
              : { background: "red" }
          }
        >
          {isShowFreeLessons && <FormFreeLessons />}
        </div>
        <div className="cardMainInfo">
          <CardInfo person={person} id={person.id} />
          <button onClick={handleClickShowProfile}>
            <Button green small>
              <span className="button__text ">Read More</span>
            </Button>
          </button>
        </div>
      </div>

      {isShowProfile ? (
        <div className="profileInfo">
          <div className="profileInfo__info">
            <ProfileInfoCard person={person} key={person.toString()} />
          </div>
          <div className="profileInfo__badge">
            <ProfileInfoBadge person={person} key={person.toString()} />
          </div>
        </div>
      ) : null}
    </section>
  );
}

export default Card;
