import "./ProfileInfoBadge.scss";
import { useState } from "react";
import data from "../../FindProfileData";
import CardFrom from "../../../Find/components/Card/CardMain/CardFrom/CardFrom";
import Button from "../../../../components/Button";
import SendMessage from "../SendMessage/SendMessage";
export const ProfileInfoBadge = ({ person }) => {
  //useState show Message
  const [isMessage, setIsMessage] = useState();

  const onClickMessage = () => {
    setIsMessage(!isMessage);
  };
  return (
    <section>
      <div className="profileInfoBadge">
        <div classname="profileInfoBadge__img">
          <img
            className="profileImgBadge"
            alt={person.name}
            src={process.env.PUBLIC_URL + person.imgPath}
          />
        </div>
        <div classname="profileInfoBadge__from">
          <CardFrom person={person} />
        </div>
        <div className="buttonsBadge">
          <div
            style={
              isMessage
                ? {
                    display: "flex",
                    justifyContent: "center",
                  }
                : { background: "red" }
            }
          >
            {isMessage && <SendMessage />}
          </div>
          {data.buttonBadge.map((type, index) => (
            <div className="buttonBadge">
              <button onClick={onClickMessage}>
                <Button green big key={index.toString()}>
                  <div className="buttonBadgeBlock">
                    <div className="badgeIconBlock">
                      <img
                        src={type.src}
                        alt="email"
                        className="badgeIconBlock__icon"
                      />
                    </div>
                    <p className="button__text ">{type.text}</p>
                  </div>
                </Button>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
