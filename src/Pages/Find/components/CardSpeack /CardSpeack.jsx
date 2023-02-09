import "./CardSpeack.scss";

export const CardSpeack = ({ person }) => {
  return (
    <div className="cardName-speak">
      <h2 className="cardName-speak__title">Speack </h2>
      <p className="cardName-speak__lang">
        {person.language} - <span>{person.speaks}</span>
      </p>
    </div>
  );
};
