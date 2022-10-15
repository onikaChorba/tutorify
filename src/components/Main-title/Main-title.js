import './Main-title.scss';
import Button from "../Button/Button";

function MainTitle() {
  return (
    <div className='main-title'>
      <div className='main-title__pre-title'>
        <div className='main-pre-title'>
          <div className='pre-title__text'>We are The Best </div>
          <div className='pre-title__line'></div>
        </div>
      </div>
      <div className='main-title__title'>Learn Frome Home
        With <span> The Best </span>
        Online Languange Tutors</div>
      <div className='main-title__text text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Id interdum dui mollis . Suspendisse nulla :</div>
      <Button green medium>
        <a className="button__text " href="#"> Try Free Lessons</a>
      </Button>
    </div>
  );
};

export default MainTitle;
