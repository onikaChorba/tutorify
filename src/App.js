import Header from './components/Header/Header';
import MainTitle from './components/Main-title/Main-title';
import MainImg from './components/Main-img/Main-img';

import './Pages/Front-page/Front-page.scss';



function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='hero main-container'>
        <MainTitle />
        <MainImg />
      </div>
    </div>
  );
}

export default App;
