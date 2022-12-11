import "./FilterSelect.scss";
import React from "react";

export default function FilterSelect({}) {
  return (
    <div className="filterSelect">
      <select>
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
  );
}
