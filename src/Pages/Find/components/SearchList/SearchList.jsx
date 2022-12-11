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

  const filtered = [...filteredPersons]
    .slice(0, next)
    .sort((a, b) => {
      return a.stars - b.stars;
    })
    .map((person) => (
      <Card key={person.id} person={person} stars={person.stars} />
    ));

  return (
    <div>
      {filtered}
      <div className="search__button" onClick={handleMorePerson}>
        <Button orange medium>
          <span className="button__text">Show more</span>
        </Button>
      </div>
    </div>
  );
}

export default SearchList;
