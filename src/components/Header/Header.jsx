import React from "react";
import "./Header.scss";

import { NavLink } from "react-router-dom";
import Button from "../Button";
import menu from "@/assets/img/menu.png";

function Header() {
  //useState snow Menu
  const [isAddMenu, setIsAddMenu] = React.useState();

  const onClickMenu = () => {
    setIsAddMenu(!isAddMenu);
  };

  return (
    <header className="header">
      <div className="header-container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="header__logo">Tutorify</div>
          <div className="header__menu">
            <img src={menu} alt="menu" onClick={onClickMenu} />
          </div>
        </div>
        <nav>
          <ul
            className="header__nav-bar"
            style={
              isAddMenu
                ? {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    paddingTop: "40px",
                    float: "right",
                  }
                : { display: "none" }
            }
          >
            <li className="nav-bar__list">
              <NavLink activeclassname="active" to="/" className="nav-link">
                Home
              </NavLink>
            </li>
            <li className="nav-bar__list">
              <NavLink
                activeclassname="active"
                to="/lessons"
                className="nav-link"
              >
                Lessons
              </NavLink>
            </li>
            <li className="nav-bar__list">
              <NavLink activeclassname="active" to="/find" className="nav-link">
                Find Tutors
              </NavLink>
            </li>
            <li className="nav-bar__list">
              <NavLink
                activeclassname="active"
                to="/about"
                className="nav-link"
              >
                About Us
              </NavLink>
            </li>
            <li className="nav-bar__list nav-bar__button">
              <Button green small>
                <span className="button__text ">Login</span>
              </Button>
            </li>
            <li className="nav-bar__list nav-bar__button">
              <Button orange small>
                <span className="button__text "> Sign Up</span>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
export default Header;
