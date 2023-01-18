import "./ReviewStarsInfo.scss";

export const ReviewStarsInfo = () => {
  return (
    <div>
      <div className="starsDetails">
        <p className="starsDetails__numberStars">5 Stars</p>
        <div className="starsDetails__border"></div>
        <p className="starsDetails__numberStars">(2)</p>
      </div>
      <div className="starsDetails">
        <p className="starsDetails__numberStars">4 Stars</p>
        <div className="starsDetails__border"></div>
        <p className="starsDetails__numberStars">(0)</p>
      </div>
      <div className="starsDetails">
        <p className="starsDetails__numberStars">3 Stars</p>
        <div className="starsDetails__border"></div>
        <p className="starsDetails__numberStars">(0)</p>
      </div>
      <div className="starsDetails">
        <p className="starsDetails__numberStars">2 Stars</p>
        <div className="starsDetails__border"></div>
        <p className="starsDetails__numberStars">(0)</p>
      </div>
      <div className="starsDetails">
        <p className="starsDetails__numberStars">1 Stars</p>
        <div className="starsDetails__border"></div>
        <p className="starsDetails__numberStars">(0)</p>
      </div>
    </div>
  );
};
