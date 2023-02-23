import { React, useState } from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import menu from "@/assets/img/menu.png";
import { FormSingUp } from "../Form/FormSingUp/FormSingUp";
import { FormLoginIn } from "../Form/FormLoginIn/FormLoginIn";
import routes from "../../routes";

function Header() {
  // show Menu
  const [isAddMenu, setIsAddMenu] = useState();

  const onClickMenu = () => {
    setIsAddMenu(!isAddMenu);
  };
  // show Sing Up
  const [isShowSingUp, setIsShowSingUp] = useState(false);
  const handleClickShowSingUp = () => {
    setIsShowSingUp((current) => !current);
  };
  // show Login In
  const [isShowLoginIn, setIsShowLoginIn] = useState(false);
  const handleClickShowLoginIn = () => {
    setIsShowLoginIn((current) => !current);
  };
  // add active class
  const activeLink = ({ isActive }) =>
    isActive ? "active nav-link" : "nav-link";

  const displaySb = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const displayCenter = {
    display: "flex",
    justifyContent: "center",
  };
  const showMenu = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "40px",
    float: "right",
  };
  return (
    <header className="header">
      <div className="header-container">
        <div style={displaySb}>
          <div className="header__logo">Tutorify</div>
          <div className="header__menu">
            <img src={menu} alt="menu" onClick={onClickMenu} />
          </div>
        </div>
        <nav>
          <ul
            className="header__nav-bar"
            style={isAddMenu ? showMenu : { display: "none" }}
          >
            <li className="nav-bar__list">
              <NavLink end to={routes.HOME} className={activeLink}>
                Home
              </NavLink>
            </li>
            <li className="nav-bar__list">
              <NavLink className={activeLink} to={routes.LESSONS}>
                Lessons
              </NavLink>
            </li>
            <li className="nav-bar__list">
              <NavLink to={routes.FIND} className={activeLink}>
                Find Tutors
              </NavLink>
            </li>
            <li className="nav-bar__list">
              <NavLink className={activeLink} to={routes.ABOUT}>
                About Us
              </NavLink>
            </li>
            <li className="nav-bar__list nav-bar__button">
              <button onClick={handleClickShowLoginIn}>
                <Button green small>
                  <span className="button__text ">Login</span>
                </Button>
              </button>
            </li>
            <li className="nav-bar__list nav-bar__button">
              <button onClick={handleClickShowSingUp}>
                <Button orange small>
                  <span className="button__text "> Sign Up</span>
                </Button>
              </button>
            </li>
          </ul>
        </nav>
      </div>
      <div style={isShowSingUp ? displayCenter : null}>
        {isShowSingUp && <FormSingUp />}
      </div>
      <div style={isShowLoginIn ? displayCenter : null}>
        {isShowLoginIn && <FormLoginIn />}
      </div>
    </header>
  );
}
export default Header;
