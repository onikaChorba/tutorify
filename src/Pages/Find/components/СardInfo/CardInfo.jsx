import Button from "../../../../components/Button";

export const CardInfo = () => {
  return (
    <div className="cardInfo">
      <nav>
        <ul>
          <li>Profile</li>
          <li>Schedule</li>
        </ul>
      </nav>
      <div className="cardInfo__video cardVideo">
        <img className="cardVideo__img"></img>
        <img className="cardVideo__icon"></img>
      </div>
      <article className="cardInfo__info">
        <div>Description</div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
          aliquam integer sit mauris sit. Pellentesque urna, adipiscing at
          aliquam tempor non. Lectus bibendum sollicitudin aliquet id...
        </p>
        <Button green small>
          <span className="button__text ">Read more</span>
        </Button>
      </article>
    </div>
  );
};
