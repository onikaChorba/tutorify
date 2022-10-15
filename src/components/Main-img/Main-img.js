import './Main-img.scss';
import heroImg from '../../img/hero-img.png';

function MainImg() {
  return (<div className='hero__img'>
    <div className='bg-img'></div>
    <img className='hero-img' src={heroImg} alt="men" /></div>);
}

export default MainImg;