import "./ProfileInfoSchedule.scss";
// import Calendar from "moedim";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

export const ProfileInfoSchedule = ({ person }) => {
  const localizer = momentLocalizer(moment);

  return (
    <section>
      <div className="profileInfoSchedule">
        <article className="profileInfoScheduleArticle">
          <h5 className="profileInfoScheduleArticle__title">Shedule</h5>
          <div className="profileInfoScheduleArticle__calendar">
            <Calendar
              localizer={localizer}
              startAccessor="start"
              endAccessor="end"
              style={{ height: 500 }}
            />
          </div>
          <div className="profileInfoScheduleArticle__workHours">
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
        </article>
      </div>
    </section>
  );
};
