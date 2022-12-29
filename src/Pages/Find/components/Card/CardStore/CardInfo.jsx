import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardStoreCalendar from "./CardStoreCalendar/CardStoreCalendar";
import CardStoreVideo from "./CardStoreVideo/CardStoreVideo";
import "../CardStore/CardInfo.scss";
function CardInfo({ person }) {
  const [isCardInfo, setCardInfo] = useState();
  useEffect(() => {
    setCardInfo(isCardInfo);
  }, [isCardInfo]);

  const getCard = () => {
    if (!isCardInfo) {
      return <CardStoreVideo person={person} />;
    } else {
      return <CardStoreCalendar person={person} />;
    }
  };
  function handleClickProfile() {
    this.setState({ isCardInfo: true });
  }
  function handleClickSchedule() {
    this.setState({ isCardInfo: false });
  }
  return (
    <div className="cardInfo">
      <nav className="cardInfo__nav">
        <ul style={{ display: "flex" }}>
          <button onChange={handleClickProfile}>
            <li className="cardNav">Profile </li>
          </button>
          <button onChange={handleClickSchedule}>
            <li className="cardNav">Schedule </li>
          </button>
        </ul>
      </nav>
      <div>{getCard()}</div>
    </div>
  );
}

export default CardInfo;
