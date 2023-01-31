import "./Purchase.scss";
import { useState } from "react";
import SecondTitle from "@/Pages/FrontPage/components/SecondTitle";
import data from "@/Pages/FrontPage/FrontPageData";
import Button from "@/components/Button/Button";
import CircleImg from "@/Pages/FrontPage/components/CircleImg/CircleImg";
import { FormFreeLessons } from "@/components/Form/FormFreeLessons/FormFreeLessons";
import { NavLink } from "react-router-dom";

export const Purchase = () => {
  //useState Book Lessons
  const [isShowBookLessons, setIsShowBookLessons] = useState(false);
  const handleBookLessons = () => {
    setIsShowBookLessons((current) => !current);
  };
  return (
    <section className="purchase ">
      <div className="purchase__info">
        {data.dataPurchaseSecondTitle.map((el, key) => (
          <SecondTitle title={el.title} text={el.text} key={key.toString()} />
        ))}

        <div className="second-title__button">
          <button onClick={handleBookLessons}>
            <Button medium orange>
              <div className="button__text "> Book Your Lessons</div>
            </Button>
          </button>

          <Button medium whiteOrange>
            <NavLink to="/find/">
              <div className="button__text" style={{ color: "#FB9C46" }}>
                Find Your Tutors
              </div>
            </NavLink>
          </Button>
        </div>
      </div>
      <div
        style={
          isShowBookLessons
            ? {
                display: "flex",
                justifyContent: "center",
              }
            : { background: "red" }
        }
      >
        {isShowBookLessons && <FormFreeLessons />}
      </div>
      <div className="purchase__img">
        <CircleImg />
      </div>
    </section>
  );
};
