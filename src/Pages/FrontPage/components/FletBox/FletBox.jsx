import "./FletBox.scss";
import arrow from "@/assets/img/arrow.png";
import flet1 from "@/assets/img/flet-icon1.png";
import flet2 from "@/assets/img/flet-icon2.png";
import flet3 from "@/assets/img/flet-icon3.png";
import flet4 from "@/assets/img/flet-icon4.png";
import flet5 from "@/assets/img/flet-icon5.png";
import flet6 from "@/assets/img/flet-icon6.png";
import flet7 from "@/assets/img/flet-icon7.png";
import { useState } from "react";

const fletIcon = [
  { src: flet1 },
  { src: flet2 },
  { src: flet3 },
  { src: flet4 },
  { src: flet5 },
  { src: flet6 },
  { src: flet7 },
  { src: flet1 },
  { src: flet2 },
  { src: flet3 },
];

function FletBox() {
  const fletIconRow = 3;
  const [next, setNext] = useState(fletIconRow);
  const handleMoreFlet = () => {
    if (next < fletIcon.length) {
      setNext(next + fletIconRow);
    } else {
      setNext(fletIconRow);
    }
  };

  return (
    <div className="fletBox">
      <p className="fletBox__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna nec
        faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet
        ullamcorper et, ante venenatis.
      </p>
      {fletIcon.slice(0, next).map((el, index) => (
        <img key={index} src={el.src} alt="flet" className="flet-icon" />
      ))}
      <button className="fletBox__button" onClick={handleMoreFlet}>
        <p>View All</p>
      </button>
      <img src={arrow} alt="arrow" />
    </div>
  );
}
export default FletBox;
