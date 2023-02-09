import { CardDetailsMain } from "../CardDetailsMain/CardDetailsMain";
import { CardDetailsBadge } from "../CardDetailsBadge/CardDetailsBadge";
export const CardDetails = ({ person }) => {
  return (
    <section className="cardDetails" style={{ display: "flex" }}>
      <CardDetailsMain person={person} />
      <CardDetailsBadge person={person} />
    </section>
  );
};
