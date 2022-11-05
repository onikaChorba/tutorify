import "./FletBox.scss";
import arrow from "@/assets/img/arrow.png";
const fletIcon = [
  { src: "./img/flet-icon1.png", title: "icon1", className: "flet-icon" },
  { src: "./img/flet-icon2.png", title: "icon2", className: "flet-icon" },
  { src: "./img/flet-icon3.png", title: "icon3", className: "flet-icon" },
  { src: "./img/flet-icon4.png", title: "icon4", className: "flet-icon" },
  { src: "./img/flet-icon5.png", title: "icon5", className: "flet-icon" },
  { src: "./img/flet-icon6.png", title: "icon6", className: "flet-icon" },
  { src: "./img/flet-icon7.png", title: "icon7", className: "flet-icon" },
];

function FletBox() {
  return (
    <div className="fletBox">
      <p className="fletBox__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec urna nec
        faucibus ridiculus placerat ipsum. Volutpat eget ut vitae amet
        ullamcorper et, ante venenatis.
      </p>
      {fletIcon.map((index, key) => (
        <img
          key={key}
          src={index.src}
          title={index.title}
          alt="flet"
          className={index.className}
        />
      ))}
      <button className="fletBox__button"> View All</button>
      <img src={arrow} alt="arrow" />
    </div>
  );
}
export default FletBox;
