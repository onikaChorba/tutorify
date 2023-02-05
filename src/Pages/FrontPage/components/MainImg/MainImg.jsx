import "./MainImg.scss";
import UserOnline from "../UserOnline/";
import mainImg from "@/assets/img/hero-img.png";
const flet = [
  { src: "@/assets/img/flet1.png", className: "main-flet__1 main-flet" },
  { src: "@/assets/img/flet2.png", className: "main-flet__2 main-flet" },
  { src: "@/assets/img/flet3.png", className: "main-flet__3 main-flet" },
];

function MainImg() {
  return (
    <div className="mainImg">
      <div className="bg-img">
        <img className="main-img" src={mainImg} alt="men" />
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
