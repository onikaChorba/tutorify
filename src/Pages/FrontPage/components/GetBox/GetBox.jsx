import { useState } from "react";

import "./GetBox.scss";

import data from "@/Pages/FrontPage/FrontPageData";
import SecondTitle from "@/Pages/FrontPage/components/SecondTitle";
import { FormFreeLessons } from "@/components/Form/FormFreeLessons/FormFreeLessons";
const userGet = [
  { src: "./img/user1.png" },
  { src: "./img/user2.png" },
  { src: "./img/user3.png" },
  { src: "./img/user4.png" },
  { src: "./img/user4.png" },
  { src: "./img/user1.png" },
  { src: "./img/user2.png" },
  { src: "./img/user3.png" },
];
function GetBox() {
  const userGetRow = 5;
  const [nextUser, setNextUser] = useState(userGetRow);
  const [moreText, setMoreText] = useState(false);
  const handleMoreUser = () => {
    setMoreText(!moreText);
    setNextUser(!nextUser);
    if (nextUser < userGet.length) {
      setNextUser(nextUser + userGetRow);
    } else {
      setNextUser(userGetRow);
    }
  };
  //useState Free Lessons
  const [isShowFreeLessons, setIsShowFreeLessons] = useState(false);
  const handleClickShowFreeLessons = () => {
    setIsShowFreeLessons((current) => !current);
  };
  return (
    <div className="getBox">
      <div className="getBox__info">
        <div className="getBox__title">
          {data.dataGetBoxSecondTitle.map((el, key) => (
            <SecondTitle
              white
              title={el.title}
              text={el.text}
              key={key.toString()}
            />
          ))}
          {userGet.slice(0, nextUser).map((e, key) => (
            <img
              alt="user"
              className="user-box"
              src={e.src}
              key={key.toString()}
            />
          ))}
          <button onClick={handleMoreUser} className="get-span">
            <p>{!moreText ? "and others" : "less"}</p>
          </button>
        </div>
      </div>
      <div
        style={
          isShowFreeLessons
            ? {
                display: "flex",
                justifyContent: "center",
              }
            : { background: "red" }
        }
      >
        {isShowFreeLessons && <FormFreeLessons />}
      </div>
      <div className="getBox__button">
        <button className="getBox-button" onClick={handleClickShowFreeLessons}>
          <div className="getBox-button__text">Get your free lessons now</div>
        </button>
      </div>
    </div>
  );
}
export default GetBox;
