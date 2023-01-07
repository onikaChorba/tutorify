export const CardFrom = ({ person }) => {
  return (
    <div className="cardName-from">
      <div className="price">
        <p className="price__title">30 Min Trial </p>
        <p className="price__price"> {person.price}</p>
      </div>
      <div className="from">
        <p className="price__title">Hourly Rate From </p>
        <p className="price__price"> {person.from}</p>
      </div>
    </div>
  );
};
