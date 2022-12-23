import React, { useState } from "react";
import { useMemo } from "react";
import { useEffect } from "react";
import Card from "../Card/Card";
import "./Search.scss";
import { FilterButtonBlock } from "../../sections/FilterButtomBlock/FilterButtomBlock";
import Button from "@/components/Button";
import search from "@/assets/img/find/search.png";
import initialDetails from "../../FindData";

function Search() {
  const [searchField, setSearchField] = useState("");

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

  //showMore
  const personRow = 2;
  const [next, setNext] = useState(personRow);
  const handleMorePerson = () => {
    if (next < filteredList.length) {
      setNext(next + personRow);
    } else {
      setNext(personRow);
    }
  };
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
        {filteredList
          .filter((person) => {
            return (
              person.name.toLowerCase().includes(searchField.toLowerCase()) ||
              person.language.toLowerCase().includes(searchField.toLowerCase())
            );
          })
          .map((person) => (
            <Card
              key={person.id}
              person={person}
              stars={person.stars}
              speaks={person.speaks}
            />
          ))
          .slice(0, next)}
      </div>
      <div className="search__button" onClick={handleMorePerson}>
        <Button orange medium>
          <span className="button__text">Show more</span>
        </Button>
      </div>
    </section>
  );
}

export default Search;
