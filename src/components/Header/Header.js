import Button from "../Button/Button";

import './Header.scss';
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
          <a className="nav-bar__list" href="#"> <Button green small>
            <a className="button__text " href="#">Login</a>
          </Button></a>
          <a className="nav-bar__list" href="#">
            <Button orange small>
              <a className="button__text " href="#"> Sign Up</a>
            </Button>
          </a>
        </div>
      </div>

    </header>
  );
}

export default Header;