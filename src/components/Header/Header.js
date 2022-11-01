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
        <ul className="header__nav-bar" style={isAddMenu ? { display: 'flex', flexDirection: 'column', alignItems: 'flex-end', float: 'right', paddingTop: '40px' } : { display: 'none' }}>
          <li className="nav-bar__list" ><a href="#" className="nav-link">
            Home
          </a></li>
          <li className="nav-bar__list"><a href="#" className="nav-link">
            Lessons
          </a></li>
          <li className="nav-bar__list"><a href="#" className="nav-link">
            Find Tutors
          </a></li>
          <li className="nav-bar__list" ><a href="#" className="nav-link">
            About Us
          </a></li>
          <li className="nav-bar__list" ><a href="#" className="nav-link">
            <Button green small>
              <span className="button__text " >Login</span>
            </Button>
          </a></li>
          <li className="nav-bar__list" ><a href="#" className="nav-link">
            <Button orange small>
              <span className="button__text "> Sign Up</span>
            </Button>
          </a></li>
        </ul>
      </div>

    </header >
  );
}

export default Header;