import './Edu.scss';
import SecondTitle from '@/Pages/FrontPage/components/SecondTitle';
import data from '@/Pages/FrontPage/FrontPageData';
import Slider from '@/Pages/FrontPage/components/Slider';

export const Edu = () =>{
  return (
      <section className="edu">
          <article className="edu__info">
            {data.dataEduSecondTitle.map((el, key) => (
             <SecondTitle
                title={el.title} 
                text={el.text}
                key={key.toString()}
              />
            ))}
          </article>
          <div className="edu__slider">
            <Slider/>
          </div>
        </section>
  );
}