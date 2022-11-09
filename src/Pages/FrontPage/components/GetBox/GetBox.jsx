import { useState } from "react";

import "./GetBox.scss";

import data from "@/Pages/FrontPage/FrontPageData";
import SecondTitle from "@/Pages/FrontPage/components/SecondTitle";
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
  const handleMoreUser = () => {
    if (nextUser < userGet.length) {
      setNextUser(nextUser + userGetRow);
    } else {
      setNextUser(userGetRow);
    }
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
            and others
          </button>
        </div>
      </div>
      <div className="getBox__button">
        <button className="getBox-button">
          <div className="getBox-button__text">Get your free lessons now</div>
        </button>
      </div>
    </div>
  );
}
export default GetBox;
