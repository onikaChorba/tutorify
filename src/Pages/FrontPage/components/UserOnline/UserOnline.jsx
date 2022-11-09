import React, { useState } from "react";

import "./UserOnline.scss";

import heroIcon from "@/assets/img/hero-icon.png";

const user = [
  { src: "./img/user1.png" },
  { src: "./img/user2.png" },
  { src: "./img/user3.png" },
  { src: "./img/user4.png" },
];
const user1 = [
  { src: "./img/user1.png" },
  { src: "./img/user2.png" },
  { src: "./img/user3.png" },
  { src: "./img/user4.png" },
];

function UserOnline() {
  const [currentUser, setCurrentUser] = useState(0);
  const onClickUser = () => {
    setCurrentUser(currentUser + 1);
    if (currentUser < user1.length) user.push(user1[currentUser]);
  };
  return (
    <div className="user-online  user-online-hero">
      <p className="user-online__title">200+ Tutors Online</p>
      <div className="user-online__img">
        {user.map((index, key) => (
          <img key={key} src={index.src} alt="user" className="user" />
        ))}
        <button onClick={onClickUser} className="userButton">
          <img src="./img/3+.png" alt="plus"></img>
        </button>
      </div>
      <div className="user-online__icon">
        <img className="hero-icon" src={heroIcon} alt="icon" />
      </div>
    </div>
  );
}

export default UserOnline;
