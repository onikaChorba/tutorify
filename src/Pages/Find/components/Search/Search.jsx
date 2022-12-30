import React, { useState, useMemo, useEffect } from "react";
import Select from "react-select";
import "./Search.scss";

import Card from "../Card/CardMain/Card";
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
    setSelectCategory(event.value);
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
  //options
  const options = [
    { value: "all", label: "All Lessons", className: "selectOption" },
    { value: "high", label: "Popular Lessons", className: "selectOption" },
    { value: "low", label: "Unpopular Lessons", className: "selectOption" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted grey",
      color: state.isSelected ? "white" : "#cccccc",
      backgroundColor: state.isSelected ? " #FB9C46" : "white",
    }),
    control: (provided) => ({
      ...provided,
      marginTop: "5%",
    }),
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
        <div className="filtersSelect">
          <Select
            options={options}
            onChange={handleCategoryChange}
            className="selectFilter"
            value={options.filter(function (option) {
              return option.value === selectCategory;
            })}
            styles={customStyles}
          />
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
              name={person.name}
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
