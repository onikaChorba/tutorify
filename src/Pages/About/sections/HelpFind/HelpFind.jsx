import "./HelpFind.scss";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "@/components/Button";
import tutors from "@/assets/img/tutors.jpg";
import { FormFreeLessons } from "../../../../components/Form/FormFreeLessons/FormFreeLessons";

export const HelpFind = () => {
  //useState Book Lessons
  const [isShowBookLessons, setIsShowBookLessons] = useState(false);
  const handleBookLessons = () => {
    setIsShowBookLessons((current) => !current);
  };
  return (
    <section className="helpFindBlock">
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
      <div className="helpFindInfo">
        <div className="helpFind">
          <div className="helpFind__title">We help you find a tutor</div>
          <p className="helpFind__text">
            Our catalogs are convenient for quickly selecting a tutor according
            to the necessary criteria. Using the search and selecting a teacher
            is free. Find exactly your teacher in the right subject, in the
            right city and for specific purposes
          </p>
          <div className="helpFind__button">
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
        </div>
        <img src={tutors} alt="tutors" className="helpFind__img" />
      </div>
    </section>
  );
};
