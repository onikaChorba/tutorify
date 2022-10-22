import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import './Slider.scss';
import user from '../../img/user1.png';
import paws from '../../img/paws.png';
const star = [
  { src: '../../img/star.png', className: 'star', alt: 'star' },
  { src: '../../img/star.png', className: 'star', alt: 'star' },
  { src: '../../img/star.png', className: 'star', alt: 'star' },
  { src: '../../img/star.png', className: 'star', alt: 'star' },
  { src: '../../img/star.png', className: 'star', alt: 'star' },
]
function Slider() {
  return (
    <Splide>
      <SplideSlide>
        <div className="slider">
          <img className='paws' src={paws} alt='paws'></img>
          <div className="slider__star">
            {star.map((el, key) => <img src={el.src} className={el.className} alt={el.alt} key={key.toString()} />)}
          </div>
          <div className="slider__info">“With Edu Smart, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students</div>
          <div className="slider__user">
            <div className="user-info">
              <div className="user-info__icon">
                <img src={user}></img>
              </div>
              <div className="user-info__info">
                <div className="user-name">Jaquon Hart</div>
                <div className="user-prof">Digital Marketing Executive, Hypebeast</div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slider">
          <img className='paws' src={paws} alt='paws'></img>
          <div className="slider__star">
            {star.map((el, key) => <img src={el.src} className={el.className} alt={el.alt} key={key.toString()} />)}
          </div>
          <div className="slider__info">“With Edu Smart, we can make it easier for you to master a foreign language, it is important for us to grow and engage with our students</div>
          <div className="slider__user">
            <div className="user-info">
              <div className="user-info__icon">
                <img src={user}></img>
              </div>
              <div className="user-info__info">
                <div className="user-name">Jaquon Hart</div>
                <div className="user-prof">Digital Marketing Executive, Hypebeast</div>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Slider;