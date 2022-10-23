
import './SecondTitle.scss';
function SecondTitle(props) {
  const { orang, white } = props;
  const createStyle = ({ xorange, ywhite }) => {
    let colorClassName = ''
    if (orang) colorClassName += 'orang'
    if (white) colorClassName += 'white'
    return colorClassName;
  }
  return (
    <div className="second-title">
      <div className={`second-title__title ${createStyle(props)}`} >{props.title} <span className={`${createStyle(props)}`}>{props.span}</span> </div>
      <div className={`second-title__text ${createStyle(props)}`}>{props.text}</div>
    </div >
  );
}
export default SecondTitle;

