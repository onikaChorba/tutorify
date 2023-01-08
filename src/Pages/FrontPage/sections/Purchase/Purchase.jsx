import "./Purchase.scss";
import SecondTitle from "@/Pages/FrontPage/components/SecondTitle";
import data from "@/Pages/FrontPage/FrontPageData";
import Button from "@/components/Button/Button";
import CircleImg from "@/Pages/FrontPage/components/CircleImg/CircleImg";

export const Purchase = () => {
  return (
    <section className="purchase ">
      <div className="purchase__info">
        {data.dataPurchaseSecondTitle.map((el, key) => (
          <SecondTitle title={el.title} text={el.text} key={key.toString()} />
        ))}

        <div className="second-title__button">
          <Button medium orange>
            <div className="button__text "> Book Your Lessons</div>
          </Button>
          <Button medium whiteOrange>
            <div className="button__text" style={{ color: "#FB9C46" }}>
              Find Your Tutors
            </div>
          </Button>
        </div>
      </div>
      <div className="purchase__img">
        <CircleImg />
      </div>
    </section>
  );
};
