import React from "react";
import { useState } from "react";

import "./Card.scss";

import play from "@/assets/img/find/play.png";
import userIcon from "@/assets/img/user-icon.png";
import Button from "../../../../components/Button";
const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <div className="infoButton">
        <Button green small>
          <span onClick={toggleReadMore} className="read-or-hide button__text">
            {isReadMore ? "Read more" : "Show less"}
          </span>
        </Button>
      </div>
    </p>
  );
};

const star = [
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
];

function Card({ person }) {
  return (
    <div style={{ display: "flex" }}>
      <div className="card">
        <div style={{ position: "relative" }}>
          <img
            style={{ marginTop: "20px" }}
            className="cardImg"
            alt={person.name}
            src={process.env.PUBLIC_URL + person.imgPath}
          />
          <img
            style={{ position: "absolute", left: "35px", bottom: "20px" }}
            className="cardIcon"
            alt={person.icon}
            src={process.env.PUBLIC_URL + person.icon}
          />
        </div>
        <div style={{ paddingLeft: "31px" }}>
          <div className="numberLessons">
            <img className="numberLessons__icon" src={play} alt="play"></img>
            <p className="numberLessons__text"> 20 Lessons</p>
          </div>
          <div>
            <article className="cardName">
              <div className="cardName-info">
                <h2 className="cardName-info__title">{person.name}</h2>
                <p className="cardName-info__text"> {person.prof}</p>
              </div>
              <div className="cardName-star">
                <p className="cardName-star__title"> 4.9 Rating</p>
                {star.map((el, key) => (
                  <img
                    src={el.src}
                    className="star cardName-star__star"
                    alt="star"
                    key={key.toString()}
                  />
                ))}
              </div>
            </article>
            <div className="cardName-speak">
              <h2 className="cardName-speak__title">Speack </h2>
              <p className="cardName-speak__lang">
                {person.language} - <span>native</span>
              </p>
            </div>
            <div className="cardName-from">
              <div className="price">
                <p className="price__title">30 Min Trial </p>
                <p className="price__price"> {person.price}</p>
              </div>
              <div className="from">
                <p className="price__title">Hourly Rate From </p>
                <p className="price__price"> {person.from}</p>
              </div>
            </div>
            <div className="cardName-students">
              <div className="students">
                <img className="students__user" src={userIcon} alt="user"></img>
                <span className="students__number"> 120 Students</span>
              </div>
              <div className="cardButton">
                <Button green small>
                  <span className="button__text "> Book</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "47%", marginTop: "66px" }}>
        <div className="cardInfo">
          <nav className="cardInfo__nav">
            <ul style={{ display: "flex" }}>
              <li className="cardNav">Profile</li>
              <li className="cardNav">Schedule</li>
            </ul>
          </nav>
          <div className="cardInfo__video cardVideo">
            <img
              className="cardInfoImg"
              alt={person.name}
              src={process.env.PUBLIC_URL + person.imgPath}
            />
          </div>
          <article className="cardInfo__info info">
            <div className="info__title">Description</div>
            <div className="info__text">
              <ReadMore>{person.text}</ReadMore>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}

export default Card;
