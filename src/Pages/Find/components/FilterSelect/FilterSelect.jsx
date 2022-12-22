import "./FilterSelect.scss";
import React from "react";
import { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import initialDetails from "../../FindData";
import Card from "../Card/Card";
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
function FilterSelect({}) {
  const cartDetails = [...initialDetails];
  const [searchList, setSearchList] = useState(cartDetails);
  const [selectCategory, setSelectCategory] = useState();
  useEffect(() => {
    setSearchList(searchList);
  }, [setSearchList]);

  function getFilteredList() {
    if (!selectCategory) {
      return searchList.sort((a, b) => b.stars - a.stars);
    }
    return searchList.sort((a, b) => a.stars - b.stars);
  }
  let filteredList = useMemo(getFilteredList, [selectCategory, searchList]);
  function handleCategoryChange(event) {
    setSelectCategory(event.target.value);
  }

  return (
    <div className="filterSelect">
      <select onChange={handleCategoryChange}>
        <option value="" className="selectOption">
          Popular Lessons
        </option>
        <option value="low" className="selectOption">
          Unpopular Lessons
        </option>
      </select>
      <div>
        {filteredList.map((person) => (
          <Card key={person.id} person={person} stars={person.stars} />
        ))}
      </div>
    </div>
  );
}

export default FilterSelect;
