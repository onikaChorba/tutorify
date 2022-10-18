import Header from './components/Header/Header';
import MainTitle from './components/Main-title/Main-title';
import MainImg from './components/Main-img/Main-img';

import './Pages/Front-page/Front-page.scss';
import SecondTitle from './components/Second-title/SecondTitle';
import CircleImg from './components/Circle-img/CircleImg';
import TitleIsland from './components/Title-island/Title-island';
import FletBox from './components/Flet-box/Flet-box';



function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='hero main-container'>
        <MainTitle />
        <MainImg />
      </div>
      <div className='purchase main-container'>
        <div className="purchase__info">
          <SecondTitle
            title="Purchase your awesome lessons and find your tutors"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem habitant a tincidunt cras accumsan integer suscipit. Libero accumsan eget aliquet."
          />
        </div>
        <CircleImg />
      </div>
      <TitleIsland></TitleIsland>
      <FletBox />
    </div>
  );
}

export default App;
