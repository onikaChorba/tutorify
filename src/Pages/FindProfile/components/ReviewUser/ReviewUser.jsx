import React from "react";
import "./ReviewUser.scss";
import user from "@/assets/img/user1.png";
import Button from "@/components/Button";

class ReviewUser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeProf = this.handleChangeProf.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      textarea: event.target.value,
    });
  }

  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleChangeProf(event) {
    this.setState({
      prof: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: [this.state.textarea, this.state.name, this.state.prof],
    });
  }
  render() {
    const star = [
      { src: "../../img/star.png" },
      { src: "../../img/star.png" },
      { src: "../../img/star.png" },
      { src: "../../img/star.png" },
      { src: "../../img/star.png" },
    ];
    return (
      <div className="reviewUser">
        <div className="reviewUserBlock">
          <div className="reviewUserBlock__star">
            {star.map((el, key) => (
              <img
                src={el.src}
                className="star"
                alt="star"
                key={key.toString()}
              />
            ))}
          </div>
          <p className="reviewUserBlock__info">
            “With Edu Smart, we can make it easier for you to master a foreign
            language, it is important for us to grow and engage with our
            students
          </p>
          <div className="reviewUserBlock__user">
            <div className="user-info">
              <div className="user-info__icon">
                <img src={user} alt="user"></img>
              </div>
              <div className="user-info__info">
                <p className="user-name">Jaquon Hart</p>
                <p className="user-prof">
                  Digital Marketing Executive, Hypebeast
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="reviewUserBlock__info">{this.state.submit}</p>
        <form onSubmit={this.handleSubmit} className="formReview">
          <label>
            <p className="formReview__title">Review:</p>
            <textarea
              value={this.state.textarea}
              onChange={this.handleChange}
              className="formReview__textarea"
            />
          </label>
          <label>
            <p className="formReview__title"> Name:</p>
            <input
              value={this.state.name}
              onChange={this.handleChangeName}
              className="formReview__input"
            />
          </label>
          <label>
            <p className="formReview__title"> Profession:</p>
            <input
              value={this.state.prof}
              onChange={this.handleChangeProf}
              className="formReview__input"
            />
          </label>
          <div className="formReview__button">
            <Button green small>
              <button type="submit">
                <span className="button__text ">Submit!</span>
              </button>
            </Button>
          </div>
        </form>
      </div>
    );
  }
}
export default ReviewUser;
