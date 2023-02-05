import { useState } from "react";
import "../Form.scss";

import Button from "../../Button";

export const FormLoginIn = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
  };
  const handleSubmit = () => {
    alert([email, password]);
  };

  return (
    <div className="form">
      <p className="form__title">Form Login In</p>
      <div className="formBody">
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
      </div>
      <div class="buttomForm">
        <button type="submit" onClick={() => handleSubmit()}>
          <Button orange small>
            <span className="button__text ">Login In</span>
          </Button>
        </button>
      </div>
    </div>
  );
};
