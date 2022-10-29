import Button from "../Button/Button";
import menu from '../../img/menu.png';
import './Header.scss';
import React from "react";
function Header() {

  const [isAddMenu, setIsAddMenu] = React.useState();

  const onClickMenu = () => {
    setIsAddMenu(!isAddMenu);
  }

  return (
    <header className="header">
      <div className="header-container">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="header__logo">
            Tutorify
          </div>
          <div className="header__menu">
            <img src={menu} alt='menu' onClick={onClickMenu} />
          </div>
        </div>
        <ul className="header__nav-bar" style={isAddMenu ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', float: 'right', paddingTop: '40px', transitionDuration: '5s' } : { display: 'none' }}>
          <li><a className="nav-bar__list" href="#">
            Home
          </a></li>
          <li><a className="nav-bar__list" href="#">
            Lessons
          </a></li>
          <li><a className="nav-bar__list" href="#">
            Find Tutors
          </a></li>
          <li><a className="nav-bar__list" href="#">
            About Us
          </a></li>
          <li><a className="nav-bar__list" href="#">
            <Button green small>
              <span className="button__text " href="#">Login</span>
            </Button>
          </a></li>
          <li><a className="nav-bar__list" href="#">
            <Button orange small>
              <span className="button__text " href="#"> Sign Up</span>
            </Button>
          </a></li>
        </ul>
      </div>

    </header>
  );
}

export default Header;