import "./CardStoreVideo.scss";

function CardStoreVideo({ person }) {
  return (
    <section className="cardInfoVideo">
      <div className="cardInfo__video cardVideo">
        <img
          className="cardInfoImg"
          alt={person.name}
          src={process.env.PUBLIC_URL + person.imgPath}
        />
      </div>
      <div className="cardInfo__info info">
        <div className="info__title">Description</div>
        <div className="info__text">{person.text}</div>
      </div>
    </section>
  );
}
export default CardStoreVideo;
