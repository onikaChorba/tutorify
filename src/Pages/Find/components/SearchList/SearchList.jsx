import React from "react";
// import { useMemo } from "react";
// import { useEffect } from "react";
//import { useState } from "react";
// import Card from "../Card/Card";
import Button from "../../../../components/Button";

function SearchList({}) {
  // const personRow = 4;
  // const [next, setNext] = useState(personRow);
  // const handleMorePerson = () => {
  //   if (next < filteredPersons.length) {
  //     setNext(next + personRow);
  //   } else {
  //     setNext(personRow);
  //   }
  // };
  function searchLists({ filteredPersons }) {
    return <SearchList filteredPersons={filteredPersons} />;
  }

  return (
    <div className="filterSelect">
      {searchLists()}
      <div className="search__button">
        <Button orange medium>
          <span className="button__text">Show more</span>
        </Button>
      </div>
    </div>
  );
}

export default SearchList;
