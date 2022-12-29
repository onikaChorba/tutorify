import { useState } from "react";
import Button from "../../../../../../components/Button";

function CardStoreVideo({ person }) {
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <div className="infoButton">
          <Button green small>
            <span
              onClick={toggleReadMore}
              className="read-or-hide button__text"
            >
              {isReadMore ? "Read more" : "Show less"}
            </span>
          </Button>
        </div>
      </p>
    );
  };
  return (
    <section className="cardInfoVideo">
      <div className="cardInfo__video cardVideo">
        <img
          className="cardInfoImg"
          alt={person.name}
          src={process.env.PUBLIC_URL + person.imgPath}
        />
      </div>
      <article className="cardInfo__info info">
        <div className="info__title">Description</div>
        <div className="info__text">
          <ReadMore>{person.text}</ReadMore>
        </div>
      </article>
    </section>
  );
}
export default CardStoreVideo;
