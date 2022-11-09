import "./FletBox.scss";

import arrow from "@/assets/img/arrow.png";
import { useState } from "react";

const fletIcon = [
  { src: "./img/flet-icon1.png" },
  { src: "./img/flet-icon2.png" },
  { src: "./img/flet-icon3.png" },
  { src: "./img/flet-icon4.png" },
  { src: "./img/flet-icon5.png" },
  { src: "./img/flet-icon6.png" },
  { src: "./img/flet-icon7.png" },
  { src: "./img/flet-icon1.png" },
  { src: "./img/flet-icon2.png" },
  { src: "./img/flet-icon3.png" },
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
      {fletIcon.slice(0, next).map((index, key) => (
        <img key={key} src={index.src} alt="flet" className="flet-icon" />
      ))}
      <button className="fletBox__button" onClick={handleMoreFlet}>
        <p>View All</p>
      </button>
      <img src={arrow} alt="arrow" />
    </div>
  );
}
export default FletBox;
