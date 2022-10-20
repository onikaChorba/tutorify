
import './Front-page.scss';
import Header from "../../components/Header/Header.js";
import SecondTitle from '../../components/Second-title/SecondTitle';
import CircleImg from '../../components/Circle-img/CircleImg';
import TitleIsland from '../../components/Title-island/Title-island';
import FletBox from '../../components/Flet-box/Flet-box';
import List from '../../components/List/List';
import MainTitle from '../../components/Main-title/Main-title';
import MainImg from '../../components/Main-img/Main-img';
import Button from '../../components/Button/Button';

function FrontPage() {

  const data = [
    {
      title: '1-on-1 lessons in more than 150 languages',
      text: 'Learn from certified teachers with proven experience...',
      linkText: 'read more'
    },
    {
      title: 'Practice for free with the italki community',
      text: 'Develop your language skills by building connections with others...',
      linkText: 'read more'
    },
    {
      title: 'Take learning beyond the classroom',
      text: 'Learn from certified teachers with proven experience...',
      linkText: 'read more'
    },
  ]

  return (
    <div className='wrapper main-container'>
      <Header />
      <div className='hero'>
        <MainTitle />
        <MainImg />
      </div>
      <div className='learn'>
        <div className="learn__info">
          <TitleIsland /></div>
        <div className="learn__flet">
          <FletBox /></div>
      </div>
      <div className='purchase '>
        <div className="purchase__info">
          <SecondTitle
            title="Purchase your awesome lessons and find your tutors"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras accumsan integer suscipit. Libero accumsan eget aliquet."
          />
          <div className="second-title__button">
            <Button medium orange>
              <a className="button__text " href="#"> Book Your Lessons</a>
            </Button >
            <Button medium whiteOrange>
              <a className="button__text" style={{ color: "#FB9C46" }} href="#"> Find Your Tutors</a>
            </Button >
          </div>
        </div>
        <CircleImg />
      </div>
      <div className='willGet'>
        <div className='willGet__img'></div>
        <div className='willGet__list'>
          <SecondTitle title="What Will You" span='Get' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Id interdum dui mollis . Suspendisse nulla :"></SecondTitle>
          {
            data.map((el, key) =>
              <div className='list-block' key={key.toString()}>
                <List title={el.title} text={el.text} span={el.linkText} />
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default FrontPage;