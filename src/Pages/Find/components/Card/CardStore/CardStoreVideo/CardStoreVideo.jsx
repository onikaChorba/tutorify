import Button from "@/components/Button";
import { NavLink } from "react-router-dom";
import data from "../../../../FindData";
import { ProfileInfo } from "../../../../../FindProfile/section/ProfileInfo/ProfileInfo";
function CardStoreVideo({ person }) {
  const id = [person.id];
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
        <NavLink className="cardNav active" to={`/find/Profile/${id}`}>
          <button>
            <Button green small>
              <span className="button__text ">Read More</span>
            </Button>
          </button>
        </NavLink>
      </article>
    </section>
  );
}
export default CardStoreVideo;
