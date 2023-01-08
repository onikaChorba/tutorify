import React, { useState, useMemo } from "react";
import Select from "react-select";
import "./Search.scss";

import Card from "../../components/Card/CardMain/CardMain";
import { FilterButtonBlock } from "../FilterButtomBlock/FilterButtomBlock";
import Button from "@/components/Button";
import search from "@/assets/img/find/search.png";
import data from "../../FindData";

function Search() {
  //useState find in input
  const [searchField, setSearchField] = useState("");

  const handleChange = (e) => {
    setSearchField(e.target.value);
  };

  //useState select
  const cartDetails = [...data.initialDetails];

  const [selectCategory, setSelectCategory] = useState("all");

  function getFilteredList() {
    if (selectCategory === "all") {
      return cartDetails;
    } else if (selectCategory === "high") {
      return cartDetails.sort((a, b) => b.stars - a.stars);
    } else if (selectCategory === "low") {
      return cartDetails.sort((a, b) => a.stars - b.stars);
    }
  }

  function handleCategoryChange(event) {
    setSelectCategory(event.value);
  }

  //useState showMore
  const personRow = 2;
  const [next, setNext] = useState(personRow);
  const handleMorePerson = () => {
    if (next < filteredList.length) {
      setNext(next + personRow);
    } else {
      setNext(personRow);
    }
  };

  //options style

  const options = [
    { value: "all", label: "All Lessons" },
    { value: "high", label: "Popular Lessons" },
    { value: "low", label: "Unpopular Lessons" },
  ];
  const customStyles = {
    option: (provided, state) => ({
      ...provided,
      borderBottom: "1px dotted #cccccc",
      color: state.isSelected ? "white" : "#cccccc",
      backgroundColor: state.isSelected ? " #FB9C46" : "white",
    }),
    control: (provided) => ({
      ...provided,
      width: "100%",
      height: "66px",
      border: "none",
      borderRadius: "10px",
      "&:hover": { borderColor: "#FB9C46" },
      boxShadow: "none",
    }),
    singleValue: (defaultStyles) => ({
      ...defaultStyles,
      color: "#979797",
    }),
  };

  const filteredList = useMemo(getFilteredList, [selectCategory, cartDetails]);
  //filtered Button
  // const [filterButton, setFilterButton] = useState(cartDetails);
  // const handleChangeFilter = (e) => {
  //   let stButton = e.target.value;
  //   let stCard = cartDetails.tipo;
  //   alert(stButton);
  //   alert();
  //   if (filterButton === "All") {
  //     return cartDetails.filter((e) => e.tipo === "All");
  //   }
  //   setFilterButton();
  // };

  return (
    <section className="search">
      <div className="search__block">
        <div className="search-block">
          <div className="search-input">
            <input
              className="search-name search-lang"
              type="search"
              placeholder="Language lessons"
              onChange={handleChange}
            />
            <input
              className="search-name search-lang"
              type="search"
              placeholder="Tutor Name"
              onChange={handleChange}
            />
            <Button orange search>
              <div className="search-button">
                <img
                  src={search}
                  alt="search"
                  className="search-button__img"
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
      <div>
        <FilterButtonBlock />
      </div>
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
              tipo={person.tipo}
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
