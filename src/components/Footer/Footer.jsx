import "./Footer.scss";
import data from "@/Pages/FrontPage/FrontPageData";
import Links from "@/components/Links/Links";
import google from "@/assets/img/Icon-google.png";
import twiter from "@/assets/img/Icon-twiter.png";
import instagram from "@/assets/img/Icon-instagram.png";
import linkedIn from "@/assets/img/Icon-linkedin.png";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer__subscribe subscribe ">
          <div className="subscribe__logo">Tutorify</div>
          <p className="subscribe__info">Learn more than just a language</p>
          <div className="subscribe__icon">
            <a href="https://www.google.com.ua/?hl=ua">
              <img src={google} alt="icon" className="icon-subscribe" />
            </a>
            <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidWsifQ%3D%3D%22%7D">
              <img src={twiter} alt="icon" className="icon-subscribe" />
            </a>
            <a href="https://www.instagram.com">
              <img src={instagram} alt="icon" className="icon-subscribe" />
            </a>
            <a href="https://www.linkedin.com/feed/">
              <img src={linkedIn} alt="icon" className="icon-subscribe" />
            </a>
          </div>
        </div>
        <div className="footer__find ">
          <Links
            title="Find Tutors"
            li={data.linkFind.map((el, key) => (
              <a href={el.href} className={el.className} key={key.toString()}>
                {el.text}
              </a>
            ))}
          />
        </div>
        <div className="footer__lessons">
          <Links
            title="Lessons"
            li={data.linkLearn.map((el, key) => (
              <a href={el.href} className={el.className} key={key.toString()}>
                {el.text}
              </a>
            ))}
          ></Links>
        </div>

        <div className="footer__company">
          <Links
            title="Company"
            li={data.linkCompany.map((el, key) => (
              <a href={el.href} className={el.className} key={key.toString()}>
                {el.text}
              </a>
            ))}
          ></Links>
        </div>
        <div className="footer__more">
          <Links
            title="More"
            li={data.linkMore.map((el, key) => (
              <a href={el.href} className={el.className} key={key.toString()}>
                {el.text}
              </a>
            ))}
          ></Links>
        </div>
      </div>
      <div className="footer-autor">Copyright © 2021. Created with love.</div>
    </footer>
  );
}
export default Footer;
