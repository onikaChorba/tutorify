
import './SecondTitle.scss';
function SecondTitle(props) {
  return (
    <div className="second-title">
      <div className="second-title__title">{props.title} {props.span}</div>
      <div className="second-title__text">{props.text}</div>
    </div >
  );
}
export default SecondTitle;

