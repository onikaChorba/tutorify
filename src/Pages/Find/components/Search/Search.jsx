import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./Search.scss";

import Button from "@/components/Button";

import SearchList from "../SearchList/SearchList";
import search from "@/assets/img/find/search.png";
import { FilterButtonBlock } from "../../sections/FilterButtomBlock/FilterButtomBlock";
import initialDetails from "../../FindData";

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

  const cartDetails = [...initialDetails];
  const [searchList, setSearchList] = useState(cartDetails);
  const [selectCategory, setSelectCategory] = useState("all");
  useEffect(() => {
    setSearchList(searchList);
  }, [setSearchList]);

  function getFilteredList() {
    if (selectCategory === "all") {
      return searchList;
    } else if (selectCategory === "high") {
      return searchList.sort((a, b) => b.stars - a.stars);
    } else return searchList.sort((a, b) => a.stars - b.stars);
  }
  const filteredList = useMemo(getFilteredList, [selectCategory, searchList]);
  function handleCategoryChange(event) {
    setSelectCategory(event.target.value);
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
        <div className="filterSelect">
          <select onChange={handleCategoryChange}>
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
      </div>
      <FilterButtonBlock />
      <div>
        {filteredList.map((person) => (
          <Card key={person.id} person={person} stars={person.stars} />
        ))}
      </div>
    </section>
  );
}

export default Search;
