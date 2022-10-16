import './CircleImg.scss';
import mainImg from '../../img/Circle-img.png';
import icon1 from '../../img/circleIcon1.png';
import icon2 from '../../img/circleIcon2.png';
import icon3 from '../../img/circleIcon3.png';
import icon4 from '../../img/circleIcon4.png';
import icon5 from '../../img/circleIcon5.png';
function CircleImg() {
  return (
    <div className="circle-img">
      <div className='circle-img__img'></div>
      <img className='circle-img__img' src={mainImg} />
      <div className='circle-img__circle'></div>
      <div className='circle-img__line'></div>
      <img className='circle-icon' src={icon1} />
      <img className='circle-icon' src={icon2} />
      <img className='circle-icon circleIcon' src={icon3} />
      <img className='circle-icon' src={icon4} />
      <img className='circle-icon circleIcon' src={icon5} />

    </div>
  );
}
export default CircleImg;