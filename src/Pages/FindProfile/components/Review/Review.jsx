import React from "react";

import user from "@/assets/img/user1.png";
import Button from "../../../../components/Button";
// import { Button } from "react-scroll";

class Review extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      submit: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeInfo = this.handleChangeInfo.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      textarea: event.target.value,
    });
  }
  handleChangeInfo(event) {
    this.setState({
      info: event.target.value,
    });
  }
  handleChangeName(event) {
    this.setState({
      name: event.target.value,
    });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      submit: [this.state.textarea, this.state.info, this.state.name],
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
      <div>
        <div className="slider">
          <div className="slider__star">
            {star.map((el, key) => (
              <img
                src={el.src}
                className="star"
                alt="star"
                key={key.toString()}
              />
            ))}
          </div>
          <p className="slider__info">
            “With Edu Smart, we can make it easier for you to master a foreign
            language, it is important for us to grow and engage with our
            students
          </p>
          <div className="slider__user">
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
        <h1>{this.state.submit}</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            <p>Review:</p>
            <textarea
              value={this.state.textarea}
              onChange={this.handleChange}
              className="slider__info"
            />
          </label>
          <label>
            <p> Name:</p>
            <input value={this.state.name} onChange={this.handleChangeName} />
          </label>
          <label>
            <p> Profession:</p>
            <input value={this.state.info} onChange={this.handleChangeInfo} />
          </label>
          <Button green small>
            <button type="submit">
              <span className="button__text ">Submit!</span>
            </button>
          </Button>
        </form>
      </div>
    );
  }
}
export default Review;
