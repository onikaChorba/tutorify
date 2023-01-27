import Button from "../../Button";
import "../Form.scss";

export const FormLoginIn = () => {
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
      </div>
      <div class="buttomForm">
        <Button orange small>
          <button type="submit">
            <span className="button__text ">Login In</span>
          </button>
        </Button>
      </div>
    </div>
  );
};
