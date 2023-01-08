import { CardFrom } from "../../../Find/components/Card/CardMain/CardFrom/CardFrom";
import { CardName } from "../../../Find/components/Card/CardMain/CardName/CardName";
import { CardNumberLessons } from "../../../Find/components/Card/CardMain/CardNumberLessons/CardNumberLessons";
import { CardSpeack } from "../../../Find/components/Card/CardMain/CardSpeack /CardSpeack";
import { CardStudent } from "../../../Find/components/Card/CardMain/CardStudent/CardStudent";

export const ProfileInfoCard = ({ person }) => {
  return (
    <section className="profileInfoCard" style={{ paddingTop: "66px" }}>
      <div className="profileInfoCardBlock" style={{ display: "flex" }}>
        <div className="profileInfoCardBlock__img">
          <img
            style={{ marginTop: "20px", width: "80%" }}
            className="cardImg"
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
      <div className="profileInfoCardBlock">
        <div
          className="profileInfoCardBlock__block"
          style={{ display: "flex", justifyContent: "space-between" }}
        >
          <CardNumberLessons />
          <CardStudent />
        </div>
        <div className="profileInfoCardBlock__icon"></div>
      </div>
    </section>
  );
};
