export const CardImg = ({ person }) => {
  return (
    <div style={{ position: "relative" }}>
      <img
        style={{ marginTop: "20px" }}
        className="cardImg"
        alt={person.name}
        src={process.env.PUBLIC_URL + person.imgPath}
      />
      <img
        style={{ position: "absolute", left: "35px", bottom: "20px" }}
        className="cardIcon"
        alt={person.icon}
        src={process.env.PUBLIC_URL + person.icon}
      />
    </div>
  );
};
