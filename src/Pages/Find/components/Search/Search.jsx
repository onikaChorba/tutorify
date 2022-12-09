import React, { useState } from "react";

import "./Search.scss";

import Button from "@/components/Button";

import SearchList from "../SearchList/SearchList";
import search from "@/assets/img/find/search.png";
import { FilterButtonBlock } from "../../sections/FilterButtomBlock/FilterButtomBlock";
import { FilterSelect } from "../FilterSelect/FilterSelect";

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
    return <SearchList filteredPersons={filteredPersons} />;
  }

  return (
    <section className="search" style={{ paddingTop: "66px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div
          className="search-block"
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "70%",
          }}
        >
          <div className="search-input">
            <input
              className="search-name search-lang"
              type="search"
              placeholder="Language lessons"
              onChange={handleChange}
              style={{
                width: "50%",
              }}
            />
            <input
              className="search-name search-lang"
              type="search"
              placeholder="Tutor Name"
              onChange={handleChange}
              style={{
                width: "50%",
              }}
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
        <FilterSelect />
      </div>
      <FilterButtonBlock />
      {searchList()}
      <div className="search__button">
        <Button orange medium>
          <span className="button__text">Show more</span>
        </Button>
      </div>
    </section>
  );
}

export default Search;
