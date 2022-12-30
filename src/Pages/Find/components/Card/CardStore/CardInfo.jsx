import React from "react";
import { useState } from "react";

import "../CardStore/CardInfo.scss";

import CardStoreCalendar from "./CardStoreCalendar/CardStoreCalendar";
import CardStoreVideo from "./CardStoreVideo/CardStoreVideo";

function CardInfo({ person }) {
  const [isCardInfo, setCardInfo] = useState(true);
  const handleClickProfile = () => {
    setCardInfo(!isCardInfo);
  };
  const handleClickSchedule = () => {
    setCardInfo(!isCardInfo);
  };
  return (
    <div className="cardInfo">
      <nav className="cardInfo__nav">
        <ul style={{ display: "flex" }}>
          <button onClick={handleClickProfile}>
            <li className="cardNav">Profile </li>
          </button>
          <button onClick={handleClickSchedule}>
            <li className="cardNav">Schedule </li>
          </button>
        </ul>
      </nav>
      <div>
        {isCardInfo ? (
          <CardStoreVideo person={person} />
        ) : (
          <CardStoreCalendar person={person} />
        )}
      </div>
    </div>
  );
}

export default CardInfo;
