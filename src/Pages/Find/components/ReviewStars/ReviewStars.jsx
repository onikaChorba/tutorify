import "./ReviewStars.scss";

export const ReviewStars = ({ person }) => {
  const star = [
    { src: "./img/star.png" },
    { src: "./img/star.png" },
    { src: "./img/star.png" },
    { src: "./img/star.png" },
    { src: "./img/star.png" },
  ];
  return (
    <div className="ReviewStarsBox">
      <div className="reviewStarsBox__title">{person.review}</div>
      <div className="reviewStarsBox__stars">
        {star.map((el, key) => (
          <img
            src={el.src}
            className="star cardName-star__star"
            alt="star"
            key={key.toString()}
          />
        ))}
      </div>
      <div className="reviewStarsBox__numberReview">2 Review</div>
    </div>
  );
};
