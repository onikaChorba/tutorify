import { ReviewStars } from "../ReviewStars/ReviewStars";
import { ReviewStarsInfo } from "../ReviewStarsInfo/ReviewStarsInfo";
import Slider from "../../../FrontPage/components/Slider/Slider.jsx";
import "./ProfileInfoReview.scss";

export const ProfileInfoReview = ({ person }) => {
  return (
    <section>
      <div className="profileInfoReview">
        <article className="profileInfoReviewArticle">
          <h5 className="profileInfoReviewArticle__title">Review</h5>
          <div className="rewiewStarsBlock">
            <div className="rewiewStarsBlock__stars">
              <ReviewStars person={person} />
            </div>
            <div className="rewiewStarsBlock__starsInfo">
              <ReviewStarsInfo />
            </div>
          </div>
          <div className="rewiewStarsBlock__review">
            <Slider />
          </div>
        </article>
      </div>
    </section>
  );
};
