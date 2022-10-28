import './Footer.scss';
import arrow from '../../img/errowDown.png';
import React from 'react';

function Footer() {
  const icon = [
    { src: '../../img/icon-google.png', alt: 'icon', className: 'icon-subscribe' },
    { src: '../../img/icon-twiter.png', alt: 'icon', className: 'icon-subscribe' },
    { src: '../../img/icon-instagram.png', alt: 'icon', className: 'icon-subscribe' },
    { src: '../../img/icon-linkedin.png', alt: 'icon', className: 'icon-subscribe' }
  ]
  const [isAddList, setIsAddList] = React.useState();
  const onClickArrowList = () => {
    setIsAddList(!isAddList);
  }


  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer__subscribe subscribe ">
          <div className="subscribe__logo">Tutorify</div>
          <div className="subscribe__info">Learn more than just
            a language</div>
          <div className="subscribe__icon">
            {
              icon.map((el, key) => <img src={el.src} alt={el.alt} className={el.className} key={key.toString()} />)
            }
          </div>
        </div>
        <div className="footer__find ">
          <div className="footer-title">
            <div className="footer-title__title">
              Find Teacher
            </div>
            <button onClick={onClickArrowList} className="footer-title__arrow">
              <img src={arrow} alt='arrow'></img>
            </button>
          </div>

          <ul className='footer-list' style={isAddList ? { display: 'none' } : { display: 'block' }}>
            <li><a href="#" className="footer-link">English Teachers</a></li>
            <li><a href="#" className="footer-link">Chinese Teachers</a></li>
            <li> <a href="#" className="footer-link">French Teachers</a></li>
            <li><a href="#" className="footer-link">Spanish Teachers</a></li>
            <li><a href="#" className="footer-link">Other Teachers</a></li>
          </ul>
        </div>
        <div className='footer__lessons'>
          <div className="footer-title">
            <div className="footer-title__title">Lessons</div>
            <button onClick={onClickArrowList} className="footer-title__arrow">
              <img src={arrow} alt='arrow'></img>
            </button>
          </div>
          <ul className="footer-list" style={isAddList ? { display: 'none' } : { display: 'block' }}>

            <li><a href="#" className="footer-link">Learn Englishs</a></li>
            <li><a href="#" className="footer-link">Learn Chinese</a></li>
            <li><a href="#" className="footer-link">Learn Chinese</a></li>
            <li><a href="#" className="footer-link">Learn Chinese</a></li>
            <li><a href="#" className="footer-link">Learn French</a></li>
            <li><a href="#" className="footer-link">Learn Spanish</a></li>
            <li> <a href="#" className="footer-link">Learn More Languages</a></li>
          </ul>
        </div>

        <div className="footer__company">
          <div className="footer-title">
            <div className="footer-title__title">Company</div>
            <button onClick={onClickArrowList} className="footer-title__arrow">
              <img src={arrow} alt='arrow'></img>
            </button>
          </div>
          <ul className="footer-list" style={isAddList ? { display: 'none' } : { display: 'block' }}>
            <li> <a href="#" className="footer-link">About</a></li>
            <li><a href="#" className="footer-link">How it Works</a></li>
            <li><a href="#" className="footer-link">Term</a></li>
            <li><a href="#" className="footer-link">Privacy Policy</a></li>
          </ul>
        </div>
        <div className="footer__more">
          <div className="footer-title">
            <div className="footer-title__title">More</div>
            <button onClick={onClickArrowList} className="footer-title__arrow">
              <img src={arrow} alt='arrow'></img>
            </button>
          </div>
          <ul className="footer-list" style={isAddList ? { display: 'none' } : { display: 'block' }}>
            <li><a href="#" className="footer-link">Documentation</a></li>
            <li><a href="#" className="footer-link">Documentation</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-autor">
        Copyright © 2021. Created with love.
      </div>
    </div>
  );
}
export default Footer;