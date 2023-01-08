import React, { useState } from "react";
import Calendar from "moedim";

import "../../CardMain/CardMain.scss";

import { CardName } from "../../CardMain/CardName/CardName";

function CardStoreCalendar({ person }) {
  const [value, setValue] = useState(new Date());

  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calendar value={value} onChange={(d) => setValue(d)} />
      </div>
      <div style={{ padding: "10%" }}>
        <CardName person={person} />
        <div>
          <div className="working" style={{ display: "flex" }}>
            <p> Working Hours:</p>
            <span style={{ paddingLeft: "20px" }}>{person.workingHours}</span>
          </div>
          <div className="holiday" style={{ display: "flex" }}>
            <p> Holiday:</p>
            <span style={{ paddingLeft: "20px" }}>{person.holiday}</span>
          </div>
          <div className="nationalHoliday" style={{ display: "flex" }}>
            <p> National Day Holiday:</p>
            <span style={{ paddingLeft: "20px" }}>
              {person.holidayNacional}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardStoreCalendar;
