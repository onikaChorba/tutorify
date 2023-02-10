import React from "react";
import { useState } from "react";
import "./CardMain.scss";
import CardMainInfo from "../CardMainInfo/CardMainInfo";
import Button from "../../../../components/Button/Button";
import { CardImg } from "../../components/CardImg/CardImg";
import { CardNumberLessons } from "../../components/CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "../../../Find/components/CardSpeack /CardSpeack";
import CardFrom from "../../components/CardFrom/CardFrom.jsx";
import { CardStudent } from "../../components/CardStudent/CardStudent";
import { CardName } from "../../components/CardName/CardName";
import { FormFreeLessons } from "@/components/Form/FormFreeLessons/FormFreeLessons";
import { ProfileInfoCard } from "../ProfileInfoCard/ProfileInfoCard";
import { ProfileInfoBadge } from "../../../Find/components/ProfileInfoBadge/ProfileInfoBadge";
function CardMain({ person }) {
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

export default CardMain;
