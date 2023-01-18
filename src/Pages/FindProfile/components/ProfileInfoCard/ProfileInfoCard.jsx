import "./ProfileInfoCard.scss";

import { CardFrom } from "../../../Find/components/Card/CardMain/CardFrom/CardFrom";
import { CardName } from "../../../Find/components/Card/CardMain/CardName/CardName";
import { CardNumberLessons } from "../../../Find/components/Card/CardMain/CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "../../../Find/components/Card/CardMain/CardSpeack /CardSpeack";
import { CardStudent } from "../../../Find/components/Card/CardMain/CardStudent/CardStudent";
import { ProfileInfoAbout } from "../ProfileInfoAbout/ProfileInfoAbout";
import { ProfileInfoNavMain } from "../ProfileInfoNavMain/ProfileInfoNavMain";
import { ProfileInfoSchedule } from "../ProfileInfoSchedule/ProfileInfoSchedule";
import { ProfileInfoReview } from "../ProfileInfoReview/ProfileInfoReview";
import { ProfileInfoResume } from "../ProfileInfoResume/ProfileInfoResume";
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
            <CardFrom person={person} />
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
      <ProfileInfoAbout person={person} />
      <ProfileInfoSchedule person={person} />
      <ProfileInfoReview person={person} />
      <ProfileInfoResume />
    </section>
  );
};
