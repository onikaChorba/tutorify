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
    <div className='wrapper main-container'>
      <Header />
      <div className='hero'>
        <MainTitle />
        <MainImg />
      </div>
      <div className='learn '>
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
        </div>
        <CircleImg />
      </div>

    </div>
  );
}

export default App;
