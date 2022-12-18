import "./FilterSelect.scss";
import React from "react";

class FilterSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "all" };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="filterSelect">
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="all" className="selectOption">
            All Lessons
          </option>
          <option value="high" className="selectOption">
            Popular Lessons
          </option>
          <option value="low" className="selectOption">
            Unpopular Lessons
          </option>
        </select>
      </div>
    );
  }
}

export default FilterSelect;
