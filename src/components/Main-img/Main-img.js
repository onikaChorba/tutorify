import './Main-img.scss';
import heroImg from '../../img/hero-img.png';
import UserOnline from '../User-online/User-online';

const flet = [
  { src: './img/flet1.png', className: 'main-flet__1' },
  { src: './img/flet2.png', className: 'main-flet__2' },
  { src: './img/flet3.png', className: 'main-flet__3' }
]

function MainImg() {
  return (<div className='mainImg'>
    <div className='bg-img'></div>
    <img className='main-img' src={heroImg} alt="men" />
    {flet.map((index, key) => <img key={key} src={index.src} title={index.title} alt='flet' className={index.className} />)}
    <UserOnline />
  </div>
  );
}

export default MainImg;