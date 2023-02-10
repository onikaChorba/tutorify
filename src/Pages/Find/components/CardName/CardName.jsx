import "./CardName.scss";

export const CardName = ({ person }) => {
  const star = [
    { src: "./img/star.png" },
    { src: "./img/star.png" },
    { src: "./img/star.png" },
    { src: "./img/star.png" },
    { src: "./img/star.png" },
  ];
  return (
    <article className="cardName">
      <div className="cardName-info">
        <h2 className="cardName-info__title">{person.name}</h2>
        <p className="cardName-info__text"> {person.prof}</p>
      </div>
      <div className="cardName-star">
        <p className="cardName-star__title">
          <span className="cardName-star__title">{person.stars}</span> Rating
        </p>
        {star.map((el, key) => (
          <img
            src={el.src}
            className="star cardName-star__star"
            alt="star"
            key={key.toString()}
          />
        ))}
      </div>
    </article>
  );
};
