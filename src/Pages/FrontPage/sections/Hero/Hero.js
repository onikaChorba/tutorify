import "./Hero.scss";
import MainTitle from "../../components/MainTitle/MainTitle";
import MainImg from "../../components/MainImg/MainImg";
export const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__info">
        <MainTitle />
      </div>
      <div className="hero__img">
        <MainImg />
      </div>
    </section>
  );
};
