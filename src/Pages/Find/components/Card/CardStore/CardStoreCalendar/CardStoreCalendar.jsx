import React, { useState } from "react";
import Calendar from "moedim";

import "./CardStoreCalendar";
//import "../../CardMain/CardMain.scss";

import { CardName } from "../../CardMain/CardName/CardName";

function CardStoreCalendar({ person }) {
  const [value, setValue] = useState(new Date());

  return (
    <section className="cardStoreCalendar">
      <div
        className="calendarStore"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <Calendar value={value} onChange={(d) => setValue(d)} />
      </div>
      <div
        style={{ paddingLeft: "10%", paddingBottom: "10%", paddingTop: "10%" }}
      >
        <CardName person={person} />
        <div>
          <div className="working" style={{ display: "flex" }}>
            <p> Working Hours:</p>
            <span style={{ paddingLeft: "10px" }}>{person.workingHours}</span>
          </div>
          <div className="holiday" style={{ display: "flex" }}>
            <p> Holiday:</p>
            <span style={{ paddingLeft: "10px" }}>{person.holiday}</span>
          </div>
          <div className="nationalHoliday" style={{ display: "flex" }}>
            <p> National Day Holiday:</p>
            <span style={{ paddingLeft: "10px" }}>
              {person.holidayNacional}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardStoreCalendar;
