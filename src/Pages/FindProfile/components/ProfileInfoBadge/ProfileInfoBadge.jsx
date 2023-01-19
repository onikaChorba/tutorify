import "./ProfileInfoBadge.scss";
import arrowRight from "@/assets/img/arrowRight.png";
import CardFrom from "../../../Find/components/Card/CardMain/CardFrom/CardFrom";
import Button from "../../../../components/Button";
import iconEmail from "@/assets/img/findProfile/Message.png";
import iconLight from "@/assets/img/findProfile/light.png";
import iconBook from "@/assets/img/findProfile/book.png";
import iconLike from "@/assets/img/findProfile/like.png";
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
          <div className="profileImgBg"></div>
          <div className="playBadge">
            <img src={arrowRight} alt="play" />
          </div>
        </div>
        <div style={{ paddingTop: "200px" }}>
          <CardFrom person={person} />
          <div>
            <Button green medium>
              <div>
                <img src={iconEmail} alt="email" />
                <span className="button__text ">Send Message</span>
              </div>
            </Button>
            <Button green medium>
              <div>
                <img src={iconLight} alt="light" />
                <span className="button__text ">Book Trial Lesson</span>
              </div>
            </Button>
            <Button green medium>
              <div>
                <img src={iconBook} alt="book" />
                <span className="button__text ">Book Private</span>
              </div>
            </Button>
            <Button green medium>
              <div>
                <img src={iconLike} alt="like" />
                <span className="button__text ">Book Private</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
