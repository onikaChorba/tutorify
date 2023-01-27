import Button from "../../Button";
import "../Form.scss";

export const FormSingUp = () => {
  return (
    <div className="form">
      <p className="form__title">Register Form</p>
      <div className="form-body">
        <div className="username">
          <label for="firstName">
            <p className="form__label"> First Name</p>
          </label>
          <input
            className="form__input"
            type="text"
            id="firstName"
            placeholder="First Name"
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
          />
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
          />
        </div>
      </div>
      <div class="buttomForm">
        <Button orange small>
          <button type="submit">
            <span className="button__text ">Register</span>
          </button>
        </Button>
      </div>
    </div>
  );
};
