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
        {flet.map((el, index) => (
          <img
            key={index}
            src={el.src}
            title={el.title}
            alt="flet"
            className={el.className}
          />
        ))}
      </div>
      <UserOnline />
    </div>
  );
}

export default MainImg;
