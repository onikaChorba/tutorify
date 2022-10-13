function Header() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="header__logo">
            Tutorify
          </div>
          <div className="header__nav-bar">
            <a className="nav-bar__list" href="#" passHref>
              Home
            </a>
            <a className="nav-bar__list" href="#" passHref>
              Lessons
            </a>
            <a className="nav-bar__list" href="#" passHref>
              Find Tutors
            </a>
            <a className="nav-bar__list" href="#" passHref>
              About Us
            </a>
            <a className="nav-bar__list button-s header__button-s-g" href="#" passHref>
              <div className="button-s__text " href="#" passHref>Login</div>
            </a>
            <a className="nav-bar__list button-s header__button-s-o" href="#" passHref>
              <div className="button-s__text " href="#" passHref> Sign Up</div>
            </a>
          </div>
        </div>

      </header>
    </div>
  );
}

export default Header;