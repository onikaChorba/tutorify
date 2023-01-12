import "./ProfileInfoSchedule.scss";

import React, { useState } from "react";
import Calendar from "moedim";

export const ProfileInfoSchedule = () => {
  const [value, setValue] = useState(new Date());
  return (
    <section>
      <div className="profileInfoSchedule">
        <article className="profileInfoScheduleArticle">
          <h5 className="profileInfoScheduleArticle__title">Shedule</h5>
          <Calendar value={value} onChange={(d) => setValue(d)} />
        </article>
      </div>
    </section>
  );
};
