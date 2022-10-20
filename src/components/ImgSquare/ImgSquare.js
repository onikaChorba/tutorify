import willImg from '../../img/will-img.png';
import './ImgSquare.scss';
function ImgSquare() {
  return (<div className='willGet__content'>
    <div className='willGet__square'>
    </div>
    <img src={willImg} alt="girl" className='willGet__img' />
  </div>);
}
export default ImgSquare;
