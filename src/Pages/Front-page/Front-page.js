import './Front-page.scss';
import data from './Front-page-data';
import Header from "../../components/Header/Header.js";
import SecondTitle from '../../components/Second-title/SecondTitle';
import CircleImg from '../../components/Circle-img/CircleImg';
import TitleIsland from '../../components/Title-island/Title-island';
import FletBox from '../../components/Flet-box/Flet-box';
import List from '../../components/List/List';
import MainTitle from '../../components/Main-title/Main-title';
import MainImg from '../../components/Main-img/Main-img';
import Button from '../../components/Button/Button';
import ImgSquare from '../../components/ImgSquare/ImgSquare';
import VideoBlock from '../../components/VideoBlock/VideoBlock';
import Slider from '../../components/Slider/Slider';

function FrontPage() {
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
              <div className="button__text " > Book Your Lessons</div>
            </Button >
            <Button medium whiteOrange>
              <div className="button__text" style={{ color: "#FB9C46" }}> Find Your Tutors</div>
            </Button >
          </div>
        </div>
        <CircleImg />
      </div>
      <div className='willGet'>
        <ImgSquare />
        <div className='willGet__list'>
          <SecondTitle title="What Will You" span='Get?' text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Id interdum dui mollis . Suspendisse nulla :"></SecondTitle>
          {
            data.dataGreenList.map((el, key) =>
              <List small green
                title={el.title} text={el.text} span={el.linkText} key={key.toString()} src={el.src} />
            )
          }
        </div>
      </div>
      <div className='works'>
        <div className='works__list'>
          <SecondTitle title="Here’s how it " span="works" text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras accumsan integer suscipit. Libero accumsan eget aliquet.'></SecondTitle>
          {
            data.dataOrangList.map((el, key) =>
              <List medium orang
                title={el.title} text={el.text} span={el.linkText} key={key.toString()} src={el.src} />
            )
          }
        </div>
        <VideoBlock></VideoBlock>
      </div>
      <div className='edu'>
        <div className='edu__info'>
          <SecondTitle title=" Edu Smart it's about mastering a timeless skill" text='cultivating new perspectives, and connecting with fascinating people
from around the world.'></SecondTitle>
        </div>
        <div className='edu__slider'>
          <Slider></Slider>
        </div>

      </div>
    </div >
  );
}

export default FrontPage;