import React, { useState } from "react";
import Calendar from "moedim";
import "./CardStoreCalendar.scss";

import { CardName } from "../CardName/CardName";

function CardStoreCalendar({ person }) {
  const [value, setValue] = useState(new Date());
  const displayCenter = {
    display: "flex",
    justifyContent: "center",
  };
  const styleMain = {
    paddingLeft: "10%",
    paddingBottom: "50px",
    paddingTop: "50px",
  };
  return (
    <section className="cardStoreCalendar">
      <div className="calendarStore" style={displayCenter}>
        <Calendar value={value} onChange={(d) => setValue(d)} />
      </div>
      <div style={styleMain}>
        <CardName person={person} />
        <div>
          <div className="storeBlock">
            <p> Working Hours:</p>
            <span className="storeBlock__text">{person.workingHours}</span>
          </div>
          <div className="storeBlock">
            <p> Holiday:</p>
            <span className="storeBlock__text">{person.holiday}</span>
          </div>
          <div className="storeBlock">
            <p> National Day Holiday:</p>
            <span className="storeBlock__text">{person.holidayNacional}</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardStoreCalendar;
