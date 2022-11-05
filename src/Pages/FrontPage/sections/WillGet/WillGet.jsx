import './WillGet.scss';
import SecondTitle from '@/Pages/FrontPage/components/SecondTitle';
import data from '@/Pages/FrontPage/FrontPageData';
import List from '@/Pages/FrontPage/components/List';
import ImgSquare from '@/Pages/FrontPage/components/ImgSquare';
export const WillGet =()=>{
return(
   <section className="willGet">
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
        </section>
);
}