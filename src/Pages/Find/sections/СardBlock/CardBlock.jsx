import CardMain from "../CardMain/CardMain";
export const CardBlock = ({ person }) => {
  return (
    <section className="cardBlock">
      <CardMain person={person} />
    </section>
  );
};
