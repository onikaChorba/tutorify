import "./Learn.scss";
import TitleIsland from "@/Pages/FrontPage/components/TitleIsland";
import FletBox from "@/Pages/FrontPage/components/FletBox";
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
