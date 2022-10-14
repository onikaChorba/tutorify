function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header__logo">
          Tutorify
        </div>
        <div className="header__nav-bar">
          <a className="nav-bar__list" href="#">
            Home
          </a>
          <a className="nav-bar__list" href="#">
            Lessons
          </a>
          <a className="nav-bar__list" href="#">
            Find Tutors
          </a>
          <a className="nav-bar__list" href="#">
            About Us
          </a>
          <button className=" button-s header__button-s-g" >
            <a className="button-s__text " href="#">Login</a>
          </button>
          <button className="button-s header__button-s-o">
            <a className="button-s__text " href="#"> Sign Up</a>
          </button>
        </div>
      </div>

    </header>
  );
}

export default Header;