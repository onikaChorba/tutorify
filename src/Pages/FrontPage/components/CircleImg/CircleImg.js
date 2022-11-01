import "./CircleImg.scss";
import mainImg from "../../img/Circle-img.png";
import icon1 from "../../img/circleIcon1.png";
import icon2 from "../../img/circleIcon2.png";
import icon3 from "../../img/circleIcon3.png";
import icon4 from "../../img/circleIcon4.png";
import icon5 from "../../img/circleIcon5.png";
function CircleImg() {
  return (
    <div className="circle-container">
      <div className="circle-img__circle"></div>
      <img className="icon__1" src={icon1} alt="icon" />
      <img className="icon__2" src={icon2} alt="icon" />
      <div className="circleIcon icon__3">
        <img src={icon3} alt="icon" />
      </div>
      <img className="icon__4" src={icon4} alt="icon" />
      <div className="circleIcon icon__5">
        {" "}
        <img src={icon5} alt="icon" />
      </div>
      <div className="circle-img">
        <img className="circle-img__img" src={mainImg} alt="icon" />
        <div className="circle-img__line"></div>
      </div>
    </div>
  );
}
export default CircleImg;
