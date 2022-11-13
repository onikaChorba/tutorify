import React from "react";
import play from "@/assets/img/find/play.png";
import userIcon from "@/assets/img/user-icon.png";
import Button from "../../../../components/Button";
const star = [
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
];

function Card({ person }) {
  return (
    <div className="card">
      <img alt={person.name} src={process.env.PUBLIC_URL + person.imgPath} />
      <img alt={person.icon} src={process.env.PUBLIC_URL + person.icon} />
      <div className="numberLessons">
        <img src={play} alt="play"></img>
        <p> 20 Lessons</p>
      </div>
      <div>
        <div className="cardName">
          <div className="cardName__info">
            <h2>{person.name}</h2>
            <p> {person.prof}</p>
          </div>
          <div className="cardName__star">
            <p> 4.9 Rating</p>
            {star.map((el, key) => (
              <img
                src={el.src}
                className="star"
                alt="star"
                key={key.toString()}
              />
            ))}
          </div>
          <div className="cardName__speack">
            <h2>Speack</h2>
            <p>
              {person.language} <span>native</span>
            </p>
          </div>
          <div className="cardName__from">
            <div className="price">
              <p>30 Min Trial </p>
              <p> {person.price}</p>
            </div>
            <div className="from">
              <p>Hourly Rate From </p>
              <p> {person.from}</p>
            </div>
          </div>
          <div className="cardName__students">
            <div className="students">
              <img src={userIcon} alt="user"></img>
              <span> 120 Students</span>
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
  );
}

export default Card;
