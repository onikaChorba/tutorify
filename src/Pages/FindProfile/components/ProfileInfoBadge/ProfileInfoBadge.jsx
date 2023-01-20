import "./ProfileInfoBadge.scss";

import data from "../../FindProfileData";
import CardFrom from "../../../Find/components/Card/CardMain/CardFrom/CardFrom";
import Button from "../../../../components/Button";
export const ProfileInfoBadge = ({ person }) => {
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
          {data.buttonBadge.map((type, index) => (
            <div className="buttonBadge">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
