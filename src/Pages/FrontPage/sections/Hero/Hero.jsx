import "./Hero.scss";
import MainTitle from "@/Pages/FrontPage/components/MainTitle";
import MainImg from "@/Pages/FrontPage/components/MainImg";
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
