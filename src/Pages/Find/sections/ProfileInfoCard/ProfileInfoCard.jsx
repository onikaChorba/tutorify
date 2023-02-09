import "./ProfileInfoCard.scss";

import { CardName } from "../../components/CardName/CardName";
import { CardNumberLessons } from "../../components/CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "../../components/CardSpeack /CardSpeack";
import { CardStudent } from "../../components/CardStudent/CardStudent";
import { ProfileInfoAbout } from "../../components/ProfileInfoAbout/ProfileInfoAbout";
import { ProfileInfoNavMain } from "../../components/ProfileInfoNavMain/ProfileInfoNavMain";
import { ProfileInfoSchedule } from "../../components/ProfileInfoSchedule/ProfileInfoSchedule";
import { ProfileInfoReview } from "../../../Find/components/ProfileInfoReview/ProfileInfoReview";
import { ProfileInfoResume } from "../../components/ProfileInfoResume/ProfileInfoResume";
import CardFrom from "../../components/CardFrom/CardFrom.jsx";
export const ProfileInfoCard = ({ person }) => {
  const icon = [
    { src: "../../img/icon1.png" },
    { src: "../../img/icon2.png" },
    { src: "../../img/icon3.png" },
  ];
  return (
    <section>
      <div className="profileInfoCard">
        <div className="profileInfoCardBlock">
          <div className="profileInfoCardBlock__img">
            <img
              className="profileImg"
              alt={person.name}
              src={process.env.PUBLIC_URL + person.imgPath}
            />
          </div>
          <div className="profileInfoCardBlock__info">
            <CardName person={person} />
            <div className="profileInfoFrom">
              <CardFrom person={person} />
            </div>
            <CardSpeack person={person} />
          </div>
        </div>
        <div className="profileInfoCardNumber">
          <CardNumberLessons />
          <CardStudent />
          <div className="iconBlock">
            {icon.map((el, key) => (
              <img
                src={el.src}
                className="iconBlock__icon"
                alt="icon"
                key={key.toString()}
              />
            ))}
          </div>
        </div>
      </div>
      <ProfileInfoNavMain />
      <div id="About">
        <ProfileInfoAbout person={person} />
      </div>
      <div id="Schedule">
        <ProfileInfoSchedule person={person} />
      </div>
      <div id="Review">
        <ProfileInfoReview person={person} />
      </div>
      <div id="Resume">
        <ProfileInfoResume />
      </div>
    </section>
  );
};
