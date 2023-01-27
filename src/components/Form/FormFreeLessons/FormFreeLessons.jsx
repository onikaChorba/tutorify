import Button from "../../Button";
import "../Form.scss";
export const FormFreeLessons = () => {
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
          <label className="form__label" for="number">
            <p> Number Phone</p>
          </label>
          <input
            className="form__input"
            type="phone"
            id="password"
            placeholder="Number"
          />
        </div>
      </div>
      <div class="buttomForm">
        <Button orange small>
          <button type="submit">
            <span className="button__text ">Submit!</span>
          </button>
        </Button>
      </div>
    </div>
  );
};
