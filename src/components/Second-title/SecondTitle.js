import Button from "../Button/Button";
import './SecondTitle.scss';
function SecondTitle(props) {
  return (
    <div className="second-title">
      <div className="second-title__title">{props.title}</div>
      <div className="second-title__text">{props.text}</div>
      <div className="second-title__button">
        <Button medium orange>
          <a className="button__text " href="#"> Book Your Lessons</a>
        </Button >
        <Button medium whiteOrange>
          <a className="button__text" style={{ color: "#FB9C46" }} href="#"> Find Your Tutors</a>
        </Button >
      </div>
    </div >
  );
}
export default SecondTitle;
