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
import GetBox from '../../components/GetBox/GetBox';
import Footer from '../../components/Footer/Footer';

function FrontPage() {
  return (
    <div className='wrapper'>
      <div className='main-container'>
        <Header />
        <div className='hero'>
          <MainTitle />
          <div className='hero__img'>
            <MainImg />
          </div>
        </div>
        <div className='learn'>
          <div className="learn__info">
            <TitleIsland /></div>
          <div className="learn__flet">
            <FletBox /></div>
        </div>
        <div className='purchase '>
          <div className="purchase__info">
            {
              data.dataPurchaseSecondTitle.map((el, key) => <SecondTitle title={el.title} text={el.text} key={key.toString()} />)
            }

            <div className="second-title__button">
              <Button medium orange>
                <div className="button__text " > Book Your Lessons</div>
              </Button >
              <Button medium whiteOrange>
                <div className="button__text" style={{ color: "#FB9C46" }}> Find Your Tutors</div>
              </Button >
            </div>
          </div>
          <div className="purchase__img">
            <CircleImg /></div>
        </div>
        <div className='willGet'>
          <div className='willGet__img'>
            <ImgSquare /></div>
          <div className='willGet__list'>
            {
              data.dataWillGetSecondTitle.map((el, key) => <SecondTitle title={el.title} span={el.span} text={el.text} key={key.toString()} />)
            }
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
            {
              data.dataWorksSecondTitle.map((el, key) => <SecondTitle title={el.title} span={el.span} text={el.text} key={key.toString()} />)
            }
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
            {
              data.dataEduSecondTitle.map((el, key) => <SecondTitle title={el.title} text={el.text} key={key.toString()} />)
            }
          </div>
          <div className='edu__slider'>
            <Slider></Slider>
          </div>
        </div>
        <div className='getLessons'>
          <GetBox />
        </div>
      </div>
      <Footer></Footer>
    </div >
  );
}

export default FrontPage;