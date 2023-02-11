import "./Hero.scss";
import { TitleBlock } from "../../components/TitleBlock/TitleBlock";
import backgroundAbout from "@/assets/img/backgroundAbout.jpeg";
export const Hero = () => {
  return (
    <section className="heroAbout">
      <img
        src={backgroundAbout}
        alt="girls having lessons"
        className="heroAbout__img"
      ></img>
      <div className="heroAbout__title">
        <TitleBlock />
      </div>
    </section>
  );
};
