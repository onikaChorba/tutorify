import './List.scss';
// import check from '../../img/check.png';
function List(props) {

  const { small, medium, green, orang } = props;

  const createParamsClass = ({ }) => {
    let colorClassName = 'list__'
    if (green) colorClassName += 'listGreen'
    if (orang) colorClassName += 'listOrang'

    let sizeClassName = ' list__'
    if (small) sizeClassName += 'listSmall'
    if (medium) sizeClassName += 'listMedium'

    return colorClassName + sizeClassName;
  }
  return (
    <div className={`list  ${createParamsClass(props)}`}>
      <div className='list-container'>
        <div className="list__icon">
          <img src={props.src} alt='check' />
        </div>
        <div className="list__info">
          <div className="list-title">
            {props.title}
          </div>
          <div className="list-text">
            <div> {props.text} {props.span}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default List;