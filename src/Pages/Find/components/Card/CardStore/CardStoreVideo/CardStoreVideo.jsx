import Button from "@/components/Button";
import { NavLink } from "react-router-dom";

function CardStoreVideo({ person }) {
  function handleClickCard(event) {}
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
        <div className="info__text">{person.text}</div>
        <NavLink
          className="cardNav active"
          to="/find/Profile/"
          onClick={handleClickCard}
        >
          <Button green small>
            <span className="button__text ">Read More</span>
          </Button>
        </NavLink>
      </article>
    </section>
  );
}
export default CardStoreVideo;
