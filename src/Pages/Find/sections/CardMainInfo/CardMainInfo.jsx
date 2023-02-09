import { useState } from "react";

import "./CardMainInfo.scss";

import CardStoreCalendar from "../../components/CardStoreCalendar/CardStoreCalendar";
import CardStoreVideo from "../../components/CardStoreVideo/CardStoreVideo";

function CardMainInfo({ person }) {
  const [isCardInfo, setCardInfo] = useState(true);
  const handleClickSchedule = () => {
    setCardInfo(!isCardInfo);
  };
  const handleClickProfile = () => {
    setCardInfo(!isCardInfo);
  };

  return (
    <div className="cardInfo">
      <nav className="cardInfo__nav">
        <ul style={{ display: "flex" }}>
          <button onClick={handleClickProfile}>
            <li className="cardNav cardNavActive">Profile</li>
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

export default CardMainInfo;
