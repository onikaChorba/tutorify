import "./FilterButton.scss";

export const FilterButton = (props) => {
  return (
    <button className="filterButton">
      <p className="filterButton__text">{props.text}</p>
    </button>
  );
};
