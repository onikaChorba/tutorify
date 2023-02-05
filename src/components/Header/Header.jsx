import React from "react";
import "./Header.scss";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import menu from "@/assets/img/menu.png";
import { useState } from "react";
import { FormSingUp } from "../Form/FormSingUp/FormSingUp";
import { FormLoginIn } from "../Form/FormLoginIn/FormLoginIn";

function Header() {
  //useState show Menu
  const [isAddMenu, setIsAddMenu] = React.useState();

  const onClickMenu = () => {
    setIsAddMenu(!isAddMenu);
  };
  //useState show Sing Up
  const [isShowSingUp, setIsShowSingUp] = useState(false);
  const handleClickShowSingUp = () => {
    setIsShowSingUp((current) => !current);
  };
  //useState show Login In
  const [isShowLoginIn, setIsShowLoginIn] = useState(false);
  const handleClickShowLoginIn = () => {
    setIsShowLoginIn((current) => !current);
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
      <div
        style={
          isShowSingUp
            ? {
                display: "flex",
                justifyContent: "center",
              }
            : { background: "red" }
        }
      >
        {isShowSingUp && <FormSingUp />}
      </div>
      <div
        style={
          isShowLoginIn
            ? {
                display: "flex",
                justifyContent: "center",
              }
            : { background: "red" }
        }
      >
        {isShowLoginIn && <FormLoginIn />}
      </div>
    </header>
  );
}
export default Header;
