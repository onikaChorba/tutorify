import React, { useState } from "react";

import "./Search.scss";

import Button from "@/components/Button";
import Scroll from "../Scroll/Scroll";
import SearchList from "../SearchList/SearchList";
import search from "@/assets/img/find/search.png";
import { FilterButtonBlock } from "../../sections/FilterButtomBlock/FilterButtomBlock";

function Search({ details }) {
  const [searchField, setSearchField] = useState("");

  const filteredPersons = details.filter((person) => {
    return (
      person.name.toLowerCase().includes(searchField.toLowerCase()) ||
      person.language.toLowerCase().includes(searchField.toLowerCase())
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
      <div className="search-block">
        <div className="search-input">
          <input
            className="search-lang"
            type="search"
            placeholder="Language lessons"
            onChange={handleChange}
          />
          <input
            className="search-name"
            type="search"
            placeholder="Tutor Name"
            onChange={handleChange}
          />
          <Button orange search>
            <div style={{ display: "flex" }}>
              <img
                src={search}
                alt="search"
                style={{ paddingRight: "10px" }}
              ></img>
              <span className="button__text">Search</span>
            </div>
          </Button>
        </div>
      </div>
      <FilterButtonBlock />
      {searchList()}
    </section>
  );
}

export default Search;
