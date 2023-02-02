import { useState } from "react";

import "../Form.scss";

import Button from "../../Button";

export const FormFreeLessons = () => {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phone, setPhone] = useState(null);

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
    if (id === "phone") {
      setPhone(value);
    }
  };
  const handleSubmit = () => {
    alert([firstName, lastName, email, phone]);
  };
  return (
    <div className="form">
      <p className="form__title">Try free lessons</p>
      <div className="formBody">
        <div style={{ display: "flex" }}>
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
          <div className="lastname">
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
        <div className="contact">
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
          <div className="password">
            <label className="form__label" for="number">
              <p> Number Phone</p>
            </label>
            <input
              className="form__input"
              type="phone"
              id="phone"
              placeholder="Number"
              value={phone}
              onChange={(e) => handleInputChange(e)}
            />
          </div>
        </div>
      </div>
      <div class="buttomForm">
        <Button orange small>
          <button type="submit" onClick={() => handleSubmit()}>
            <span className="button__text ">Submit!</span>
          </button>
        </Button>
      </div>
    </div>
  );
};
