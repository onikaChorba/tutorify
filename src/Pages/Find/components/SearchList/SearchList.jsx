import React from "react";
import { useState } from "react";
import Card from "../Card/Card";
import Button from "../../../../components/Button";

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
  // const showAll = filterShowAll;
  // const [showComponent, setShowComponeht] = useState(filterShowAll);

  const filterShowAll = [...filteredPersons]
    .slice(0, next)
    .sort((a, b) => {
      return a.id - b.id;
      //return a.stars - b.stars;
    })
    .map((person) => (
      <Card key={person.id} person={person} stars={person.stars} />
    ));

  const filterShowHigh = [...filteredPersons]
    .slice(0, next)
    .sort((a, b) => {
      return a.stars - b.stars;
    })
    .map((person) => (
      <Card key={person.id} person={person} stars={person.stars} />
    ));

  function showSelect(value) {
    if ((value = "all")) {
      return <div> {filterShowAll}</div>;
    } else if ((value = "high")) {
      return <div> {filterShowHigh}</div>;
    }
  }

  return (
    <div filterShowAll={filterShowAll} filterShowHigh={filterShowHigh}>
      {showSelect()}
      <div className="search__button" onClick={handleMorePerson}>
        <Button orange medium>
          <span className="button__text">Show more</span>
        </Button>
      </div>
    </div>
  );
}

export default SearchList;
