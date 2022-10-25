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
        <div className="footer__find find ">
          <div className="find__title">Find Teacher</div>
          <a href="#" className="find-user">English Teachers</a>
          <a href="#" className="find-user">Chinese Teachers</a>
          <a href="#" className="find-user">French Teachers</a>
          <a href="#" className="find-user">Spanish Teachers</a>
          <a href="#" className="find-user">Other Teachers</a>
        </div>
        <div className="footer__lessons lessons ">
          <div className="lessons__title">Lessons</div>
          <a href="#" className="find-user">Learn Englishs</a>
          <a href="#" className="find-user">Learn Chinese</a>
          <a href="#" className="find-user">Learn French</a>
          <a href="#" className="find-user">Learn Spanish</a>
          <a href="#" className="find-user">Learn More Languages</a>
        </div>
        <div className="footer__company company ">
          <div className="company__title">Company</div>
          <a href="#" className="find-user">About</a>
          <a href="#" className="find-user">How it Works</a>
          <a href="#" className="find-user">Term</a>
          <a href="#" className="find-user">Privacy Policy</a>
        </div>
        <div className="footer__more more ">
          <div className="more__title">More</div>
          <a href="#" className="find-user">Documentation</a>
          <a href="#" className="find-user">Documentation</a>
        </div>
      </div>
      <div className="footer-autor">
        Copyright © 2021. Created with love.
      </div>
    </div>
  );
}
export default Footer;