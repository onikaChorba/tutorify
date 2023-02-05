import "./MainImg.scss";
import UserOnline from "../UserOnline/";

const flet = [
  { src: "./img/flet1.png", className: "main-flet__1 main-flet" },
  { src: "./img/flet2.png", className: "main-flet__2 main-flet" },
  { src: "./img/flet3.png", className: "main-flet__3 main-flet" },
];

function MainImg() {
  return (
    <div className="mainImg">
      <div className="bg-img">
        <img className="main-img" src="@/assets/img/hero-img.png" alt="men" />
        {flet.map((index, key) => (
          <img
            key={key}
            src={index.src}
            title={index.title}
            alt="flet"
            className={index.className}
          />
        ))}
      </div>
      <UserOnline />
    </div>
  );
}

export default MainImg;
