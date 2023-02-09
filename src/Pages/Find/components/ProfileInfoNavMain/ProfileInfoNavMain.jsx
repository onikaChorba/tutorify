import "./ProfileInfoNavMain.scss";
import { Link, animateScroll as scroll } from "react-scroll";
export const ProfileInfoNavMain = () => {
  const navInfoMain = [
    { text: "About", to: "About" },
    { text: "Schedule", to: "Schedule" },
    { text: "Reviews", to: "Review" },
    { text: "Resume", to: "Resume" },
  ];
  return (
    <section className="profileInfoNavMain">
      <nav>
        <ul className="infoNavMainLinks">
          {navInfoMain.map((el, index) => (
            <Link
              className="infoNavMainLink"
              activeClass="cardNavActive"
              to={el.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              key={index}
            >
              {el.text}
            </Link>
          ))}
        </ul>
      </nav>
    </section>
  );
};
