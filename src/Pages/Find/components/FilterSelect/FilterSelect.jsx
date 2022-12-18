import "./FilterSelect.scss";
import React, { useState } from "react";

// class FilterSelect extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { value: "all" };
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ value: event.target.value });
//   }

// render() {
function FilterSelect() {
  return (
    <div className="filterSelect">
      <select>
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

export default FilterSelect;
