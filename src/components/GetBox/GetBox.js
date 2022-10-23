import './GetBox.scss';
import data from '../../Pages/Front-page/Front-page-data';
import SecondTitle from '../../components/Second-title/SecondTitle';
import background from '../../img/background.png';
const userGet = [
  { src: './img/user1.png', className: 'user-box', alt: "user1" },
  { src: './img/user2.png', className: 'user-box', alt: "user2" },
  { src: './img/user3.png', className: 'user-box', alt: "user3" },
  { src: './img/user4.png', className: 'user-box', alt: "user4" },
  { src: './img/user4.png', className: 'user-box', alt: "user4" }
]
function GetBox() {
  return (
    <div className="getBox">
      <div className="getBox__info">
        <img src={background} alt='background' style={{ width: "100%" }}></img>
        <div className='getBox__title'>

          {
            data.dataGetBoxSecondTitle.map((el, key) => <SecondTitle white title={el.title} text={el.text} key={key.toString()} />)
          }
          {
            userGet.map((e, key) => <img src={e.src} alt={e.alt} className={e.className} key={key.toString()} />)
          }
          <span className='get-span'>and others</span>
        </div>
      </div>
      <div className="getBox__button">
        <button className='getBox-button'>
          <div className='getBox-button__text'>
            Get your free lessons now
          </div>
        </button>
      </div>
    </div>
  );
}
export default GetBox;