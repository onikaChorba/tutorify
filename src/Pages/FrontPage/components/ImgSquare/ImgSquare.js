import willImg from "../../img/will-img.png";
import "./ImgSquare.scss";
function ImgSquare() {
  return (
    <div className="imgSquare__content">
      <div className="imgSquare__square"></div>
      <img src={willImg} alt="girl" className="imgSquare__img" />
    </div>
  );
}
export default ImgSquare;
