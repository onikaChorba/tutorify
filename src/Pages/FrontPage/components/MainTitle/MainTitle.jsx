import "./MainTitle.scss";
import { useState } from "react";
import Button from "@/components/Button";
import { FormFreeLessons } from "../../../../components/Form/FormFreeLessons/FormFreeLessons";

function MainTitle() {
  //useState Free Lessons
  const [isShowFreeLessons, setIsShowFreeLessons] = useState(false);
  const handleClickShowFreeLessons = () => {
    setIsShowFreeLessons((current) => !current);
  };
  return (
    <article className="main-title">
      <div
        style={
          isShowFreeLessons
            ? {
                display: "flex",
                justifyContent: "center",
              }
            : { background: "red" }
        }
      >
        {isShowFreeLessons && <FormFreeLessons />}
      </div>
      <div className="main-title__pre-title">
        <div className="main-pre-title">
          <div className="pre-title__text">We are The Best </div>
          <div className="pre-title__line"></div>
        </div>
      </div>
      <div className="main-title__title">
        Learn Frome Home With <span> The Best </span>
        Online Languange Tutors
      </div>
      <p className="main-title__text text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Id interdum dui
        mollis . Suspendisse nulla :
      </p>
      <button onClick={handleClickShowFreeLessons}>
        <Button green big>
          <button className="button__text ">Try Free Lessons</button>
        </Button>
      </button>
    </article>
  );
}

export default MainTitle;
