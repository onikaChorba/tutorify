import "./Learn.scss";
import TitleIsland from "../../components/TitleIsland/TitleIsland";
import FletBox from "../../components/FletBox/FletBox";

export const Learn = () => {
  return (
    <section className="learn">
      <article className="learn__info">
        <TitleIsland />
      </article>
      <div className="learn__flet">
        <FletBox />
      </div>
    </section>
  );
};
