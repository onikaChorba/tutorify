import "./MainImg.scss";
import UserOnline from "../UserOnline/UserOnline";
import mainImg from "@/assets/img/hero-img.png";
import flet1 from "@/assets/img/flet1.png";
import flet2 from "@/assets/img/flet2.png";
import flet3 from "@/assets/img/flet3.png";

const flet = [
  { src: { flet1 }, className: "main-flet__1 main-flet" },
  { src: { flet2 }, className: "main-flet__2 main-flet" },
  { src: { flet3 }, className: "main-flet__3 main-flet" },
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
