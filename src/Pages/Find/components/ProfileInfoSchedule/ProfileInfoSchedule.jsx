import "./ProfileInfoSchedule.scss";
import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

export const ProfileInfoSchedule = ({ person }) => {
  const localizer = momentLocalizer(moment);
  const displayFlex = {
    display: "flex",
  };
  const paddingLeft = {
    paddingLeft: "10px",
  };
  return (
    <section>
      <div className="profileInfoSchedule">
        <div className="profileInfoScheduleArticle">
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
            <div className="working" style={displayFlex}>
              <p> Working Hours:</p>
              <span style={paddingLeft}>{person.workingHours}</span>
            </div>
            <div className="holiday" style={displayFlex}>
              <p> Holiday:</p>
              <span style={paddingLeft}>{person.holiday}</span>
            </div>
            <div className="nationalHoliday" style={displayFlex}>
              <p> National Day Holiday:</p>
              <span style={paddingLeft}>{person.holidayNacional}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
