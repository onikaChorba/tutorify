import React, { useState } from "react";
import Calendar from "moedim";
function CardStoreCalendar({ person }) {
  const [value, setValue] = useState(new Date());
  const star = [
    { src: "../../img/star.png" },
    { src: "../../img/star.png" },
    { src: "../../img/star.png" },
    { src: "../../img/star.png" },
    { src: "../../img/star.png" },
  ];
  return (
    <section>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Calendar value={value} onChange={(d) => setValue(d)} />
      </div>
      <div style={{ padding: "10%" }}>
        <article className="cardName" style={{ paddingBottom: "20px" }}>
          <div className="cardName-info">
            <h2 className="cardName-info__title">{person.name}</h2>
            <p className="cardName-info__text"> {person.prof}</p>
          </div>
          <div className="cardName-star">
            <p className="cardName-star__title">
              <span className="cardName-star__title">{person.stars}</span>{" "}
              Rating
            </p>
            {star.map((el, key) => (
              <img
                src={el.src}
                className="star cardName-star__star"
                alt="star"
                key={key.toString()}
              />
            ))}
          </div>
        </article>
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
