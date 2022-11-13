// src/components/Search.js

import React, { useState } from "react";
import Button from "../../../../components/Button";
import Scroll from "../Scroll/Scroll";
import SearchList from "../SearchList/SearchList";
import search from "@/assets/img/find/search.png";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.prof.toLowerCase().includes(searchField.toLowerCase())
    );
  });

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  function searchList() {
    return (
      <Scroll>
        <SearchList filteredPersons={filteredPersons} />
      </Scroll>
    );
  }

  return (
    <section className="search" style={{ paddingTop: "66px" }}>
      <div>
        <div className="search-input" style={{ display: "flex" }}>
          <input
            type="search"
            placeholder="Lessons Name"
            onChange={handleChange}
          />
          <input
            type="search"
            placeholder="Tutor Name"
            onChange={handleChange}
          />
          <Button orange big>
            <div style={{ display: "flex" }}>
              <img
                src={search}
                alt="search"
                style={{ paddingRight: "10px" }}
              ></img>
              <span className="button__text ">Search</span>
            </div>
          </Button>
        </div>
      </div>
      {searchList()}
    </section>
  );
}

export default Search;
