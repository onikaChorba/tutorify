import './List.scss';
import check from '../../img/check.png';
function List(props) {
  return (
    <div className="list">
      <div className='list-container'>
        <div className="list__icon">
          <img src={check} />
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