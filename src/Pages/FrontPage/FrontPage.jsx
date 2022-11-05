import { Hero } from "./sections/Hero/Hero";
import { Learn } from "./sections/Learn/Learn";

// import SecondTitle from "./components/SecondTitle/SecondTitle";
// import CircleImg from "./components/CircleImg/CircleImg";

// import List from "./components/List/List";
// import MainTitle from "./components/MainTitle/MainTitle";
// import MainImg from "./components/MainImg/MainImg";
// import Button from "../../components/Button/Button";
// import ImgSquare from "./components/ImgSquare/ImgSquare";
// import VideoBlock from "../../Pages/FrontPage/components/VideoBlock/VideoBlock.js";
// import Slider from "./components/Slider/Slider";
// import GetBox from "../../components/GetBox/GetBox";
// import Footer from "../../components/Footer/Footer";

function FrontPage() {
  return (
    <menu>
      <Hero />
      <Learn />
      {/* 
        <div className="purchase ">
          <div className="purchase__info">
            {data.dataPurchaseSecondTitle.map((el, key) => (
              <SecondTitle
                title={el.title}
                text={el.text}
                key={key.toString()}
              />
            ))}

            <div className="second-title__button">
              <Button medium orange>
                <div className="button__text "> Book Your Lessons</div>
              </Button>
              <Button medium whiteOrange>
                <div className="button__text" style={{ color: "#FB9C46" }}>
                  {" "}
                  Find Your Tutors
                </div>
              </Button>
            </div>
          </div>
          <div className="purchase__img">
            <CircleImg />
          </div>
        </div>
        <div className="willGet">
          <div className="willGet__list">
            {data.dataWillGetSecondTitle.map((el, key) => (
              <SecondTitle
                title={el.title}
                span={el.span}
                text={el.text}
                key={key.toString()}
              />
            ))}
            {data.dataGreenList.map((el, key) => (
              <List
                small
                green
                title={el.title}
                text={el.text}
                span={el.linkText}
                key={key.toString()}
                src={el.src}
              />
            ))}
          </div>
          <div className="willGet__img">
            <ImgSquare />
          </div>
        </div>
        <div className="works">
          <div className="works__list">
            {data.dataWorksSecondTitle.map((el, key) => (
              <SecondTitle
                title={el.title}
                span={el.span}
                text={el.text}
                key={key.toString()}
              />
            ))}
            {data.dataOrangList.map((el, key) => (
              <List
                medium
                orang
                title={el.title}
                text={el.text}
                span={el.linkText}
                key={key.toString()}
                src={el.src}
              />
            ))}
          </div>
          <div className="works__video">
            <VideoBlock></VideoBlock>
          </div>
        </div>
        <div className="edu">
          <div className="edu__info">
            {data.dataEduSecondTitle.map((el, key) => (
              <SecondTitle
                title={el.title}
                text={el.text}
                key={key.toString()}
              />
            ))}
          </div>
          <div className="edu__slider">
            <Slider></Slider>
          </div>
        </div>
        <div className="getLessons">
          <GetBox />
        </div>
      </div>
      <Footer></Footer> */}
    </menu>
  );
}

export default FrontPage;
