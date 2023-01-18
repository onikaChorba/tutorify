import "./FilterButton.scss";
import data from "../../FindData";

export const FilterButton = () => {
  return (
    <div>
      <>
        {data.buttons.map((type, index) => (
          <button
            key={index.toString()}
            value={type.value}
            className="filterButton"
          >
            <p className="filterButton__text">{type.name}</p>
          </button>
        ))}
      </>
    </div>
  );
};
