import "./Footer.scss";
import data from "@/Pages/FrontPage/FrontPageData";
import Links from "@/components/Links/Links";

function Footer() {
  const icon = [
    {
      src: "../../img/icon-google.png",
      href: "https://www.google.com.ua/?hl=ua",
    },
    {
      src: "../../img/icon-twiter.png",
      href: "https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidWsifQ%3D%3D%22%7D",
    },
    {
      src: "../../img/icon-instagram.png",
      href: "https://www.instagram.com",
    },
    {
      src: "../../img/icon-linkedin.png",
      href: "https://www.linkedin.com/feed/",
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer__subscribe subscribe ">
          <div className="subscribe__logo">Tutorify</div>
          <p className="subscribe__info">Learn more than just a language</p>
          <div className="subscribe__icon">
            {icon.map((el, key) => (
              <a href={el.href} key={key.toString()}>
                <img src={el.src} alt="icon" className="icon-subscribe" />
              </a>
            ))}
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
