import './Main-img.scss';
import heroImg from '../../img/hero-img.png';
import flet1 from '../../img/flet1.png';
import flet2 from '../../img/flet2.png';
import flet3 from '../../img/flet3.png';

function MainImg() {
  return (<div className='mainImg'>
    <div className='bg-img'></div>
    <img className='main-img' src={heroImg} alt="men" />

    <img className='main-flet__1' src={flet1} alt="flet" />
    <img className='main-flet__2' src={flet2} alt="flet" />
    <img className='main-flet__3' src={flet3} alt="flet" /></div>
  );
}

export default MainImg;