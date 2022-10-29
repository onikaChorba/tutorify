import './Footer.scss';
import data from '../../Pages/Front-page/Front-page-data';
import Links from '../Links/Links';

function Footer() {
  const icon = [
    { src: '../../img/icon-google.png', alt: 'icon', className: 'icon-subscribe' },
    { src: '../../img/icon-twiter.png', alt: 'icon', className: 'icon-subscribe' },
    { src: '../../img/icon-instagram.png', alt: 'icon', className: 'icon-subscribe' },
    { src: '../../img/icon-linkedin.png', alt: 'icon', className: 'icon-subscribe' }
  ]

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
          <Links title='Find Tutors' li={
            data.linkFind.map((el, key) => <a href={el.href} className={el.className} key={key.toString()}>{el.text}</a>)
          } />
        </div>
        <div className='footer__lessons'>
          <Links title='Lessons' li={
            data.linkLearn.map((el, key) => <a href={el.href} className={el.className} key={key.toString()}>{el.text}</a>)
          }></Links>
        </div>

        <div className="footer__company">
          <Links title="Company" li={
            data.linkCompany.map((el, key) => <a href={el.href} className={el.className} key={key.toString()}>{el.text}</a>)
          }></Links>
        </div>
        <div className="footer__more">
          <Links title="More" li={
            data.linkMore.map((el, key) => <a href={el.href} className={el.className} key={key.toString()}>{el.text}</a>)
          } ></Links>
        </div>
      </div>
      <div className="footer-autor">
        Copyright © 2021. Created with love.
      </div>
    </div>
  );
}
export default Footer;