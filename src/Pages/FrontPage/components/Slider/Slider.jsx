import { Splide, SplideSlide } from "@splidejs/react-splide";

import "@splidejs/react-splide/css";
import "./Slider.scss";

import user from "@/assets/img/user1.png";
import paws from "@/assets/img/paws.png";

const star = [
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
  { src: "../../img/star.png" },
];
function Slider() {
  return (
    <Splide>
      <SplideSlide>
        <div className="slider">
          <img className="paws" src={paws} alt="paws"></img>
          <div className="slider__star">
            {star.map((el, key) => (
              <img
                src={el.src}
                className="star"
                alt="star"
                key={key.toString()}
              />
            ))}
          </div>
          <p className="slider__info">
            “With Edu Smart, we can make it easier for you to master a foreign
            language, it is important for us to grow and engage with our
            students
          </p>
          <div className="slider__user">
            <div className="user-info">
              <div className="user-info__icon">
                <img src={user} alt="user"></img>
              </div>
              <div className="user-info__info">
                <p className="user-name">Jaquon Hart</p>
                <p className="user-prof">
                  Digital Marketing Executive, Hypebeast
                </p>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="slider">
          <img className="paws" src={paws} alt="paws"></img>
          <div className="slider__star">
            {star.map((el, key) => (
              <img
                src={el.src}
                className="star"
                alt="star"
                key={key.toString()}
              />
            ))}
          </div>
          <p className="slider__info">
            “With Edu Smart, we can make it easier for you to master a foreign
            language, it is important for us to grow and engage with our
            students
          </p>
          <div className="slider__user">
            <div className="user-info">
              <div className="user-info__icon">
                <img src={user} alt="user"></img>
              </div>
              <div className="user-info__info">
                <p className="user-name">Jaquon Hart</p>
                <p className="user-prof">
                  Digital Marketing Executive, Hypebeast
                </p>
              </div>
            </div>
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
}

export default Slider;
