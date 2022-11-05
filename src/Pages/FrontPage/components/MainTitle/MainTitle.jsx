import "./MainTitle.scss";
import Button from "@/components/Button";

function MainTitle() {
  return (
    <article className="main-title">
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
      <Button green big>
        <a className="button__text " href="#">
          Try Free Lessons
        </a>
      </Button>
    </article>
  );
}

export default MainTitle;
