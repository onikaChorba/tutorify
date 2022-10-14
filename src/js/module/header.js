import Button from "../../components/Button/Button";

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
          <Button green>
            <a className="button-s__text " href="#">Login</a>
          </Button>
          <Button orange>
            <a className="button-s__text " href="#"> Sign Up</a>
          </Button>
        </div>
      </div>

    </header>
  );
}

export default Header;