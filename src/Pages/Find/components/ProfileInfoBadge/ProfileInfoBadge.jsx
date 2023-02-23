import "./ProfileInfoBadge.scss";
import { useState } from "react";
import CardFrom from "@/Pages/Find/components/CardFrom/CardFrom";
import SendMessage from "../SendMessage/SendMessage";
import { BadgeButton } from "../BadgeButton/BadgeButton";
import { FormFreeLessons } from "@/components/Form/FormFreeLessons/FormFreeLessons";
export const ProfileInfoBadge = ({ person }) => {
  //useState show Message
  const [isMessage, setIsMessage] = useState();
  const onClickMessage = () => {
    setIsMessage(!isMessage);
  };
  //useState Free Lessons
  const [isShowFreeLessons, setIsShowFreeLessons] = useState(false);
  const handleClickShowFreeLessons = () => {
    setIsShowFreeLessons((current) => !current);
  };
  const displayCenter = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <section>
      <div style={isShowFreeLessons ? displayCenter : null}>
        {isShowFreeLessons && <FormFreeLessons />}
      </div>
      <div className="profileInfoBadge">
        <div className="profileInfoBadge__img">
          <img
            className="profileImgBadge"
            alt={person.name}
            src={process.env.PUBLIC_URL + person.imgPath}
          />
        </div>
        <div className="profileInfoBadge__from">
          <CardFrom person={person} />
        </div>
        <div className="buttonsBadge">
          <div
            style={isMessage ? displayCenter : null}
            className="buttonsBadge__sendMessage"
          >
            {isMessage && <SendMessage person={person} />}
          </div>
          <button onClick={onClickMessage}>
            <BadgeButton src="./img/check.png" text="Show Chat with Tutors" />
          </button>
          <button onClick={handleClickShowFreeLessons}>
            <BadgeButton src="./img/light.png" text="Book Trial Lesson" />
          </button>
          <BadgeButton src="./img/book.png" text="Book Private" />
          <BadgeButton src="./img/like.png" text="Book Private" />
        </div>
      </div>
    </section>
  );
};
