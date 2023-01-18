import "./ProfileInfoBadge.scss";
import arrowRight from "@/assets/img/arrowRight.png";

export const ProfileInfoBadge = ({ person }) => {
  return (
    <section>
      <div className="profileInfoBadge">
        <div classname="profileInfoBadge__img">
          <div className="profileImgBg"></div>
          <div className="playBadge">
            <img src={arrowRight} alt="play" />
          </div>
          <img
            className="profileImgaBadge"
            alt={person.name}
            src={process.env.PUBLIC_URL + person.imgPath}
          />
        </div>
      </div>
    </section>
  );
};
