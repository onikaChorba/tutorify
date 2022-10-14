import Header from './js/module/Header';
import MainTitle from './components/Main-title/Main-title';
import heroImg from './img/hero-img.png';



function App() {
  return (
    <div className='wrapper'>
      <Header />
      <div className='hero main-container'>
        <MainTitle />
        <div className='hero__img'>
          <div className='bg-img'></div>
          <img className='hero-img' src={heroImg} alt="men" /></div>
      </div>
    </div>
  );
}

export default App;
