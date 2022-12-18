import React from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Button from "../../../../components/Button";
import initialDetails from "../../FindData";

function SearchList({ filteredPersons }) {
  const personRow = 4;
  const [next, setNext] = useState(personRow);
  const handleMorePerson = () => {
    if (next < filteredPersons.length) {
      setNext(next + personRow);
    } else {
      setNext(personRow);
    }
  };

  //useStateSelect
  const cartDetails = [...initialDetails];

  const [searchList, setSearchList] = useState(cartDetails);
  const [selectCategory, setSelectCategory] = useState();
  useEffect(() => {
    setSearchList(searchList);
  }, []);

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
        {/* <option value="" className="selectOption">
          All Lessons
        </option> */}
        <option value="high" className="selectOption">
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
      <div className="search__button" onClick={handleMorePerson}>
        <Button orange medium>
          <span className="button__text">Show more</span>
        </Button>
      </div>
    </div>
  );
}

export default SearchList;
