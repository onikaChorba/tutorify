import './Works.scss';
import SecondTitle from '@/Pages/FrontPage/components/SecondTitle';
import data from '@/Pages/FrontPage/FrontPageData';
import List from '@/Pages/FrontPage/components/List';
import VideoBlock from '@/Pages/FrontPage/components/VideoBlock';
export const Works = () => {
return (
   <section className="works">
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
            <VideoBlock/>
          </div>
        </section>
        );
}