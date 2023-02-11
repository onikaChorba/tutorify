import { useState } from "react";

import "../Form.scss";

import Button from "@/components/Button";

export const FormSingUp = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };
  const handleSubmit = () => {
    alert([firstName, lastName, email, password, confirmPassword]);
  };
  return (
    <div className="form">
      <p className="form__title">Register Form</p>
      <div className="formBody">
        <div className="userNameBlock">
          <div className="userName">
            <label for="firstName">
              <p className="form__label"> First Name</p>
            </label>
            <input
              className="form__input"
              type="text"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="lastName">
            <label className="form__label" for="lastName">
              <p>Last Name</p>
            </label>
            <input
              type="text"
              name=""
              id="lastName"
              className="form__input"
              placeholder="LastName"
              value={lastName}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>

        <div className="email">
          <label className="form__label" for="email">
            <p>Email</p>
          </label>
          <input
            type="email"
            id="email"
            className="form__input"
            placeholder="Email"
            value={email}
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="userPaswordBlock">
          <div className="password">
            <label className="form__label" for="password">
              <p> Password</p>
            </label>
            <input
              className="form__input"
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
          <div className="confirm-password">
            <label className="form__label" for="confirmPassword">
              <p>Confirm Password</p>
            </label>
            <input
              className="form__input"
              type="password"
              id="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
      </div>
      <div class="buttomForm">
        <button type="submit" onClick={() => handleSubmit()}>
          <Button orange small>
            <span className="button__text ">Register</span>
          </Button>{" "}
        </button>
      </div>
    </div>
  );
};
