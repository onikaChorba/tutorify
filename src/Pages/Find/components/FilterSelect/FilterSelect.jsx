import "./FilterSelect.scss";

export const FilterSelect = () => {
  return (
    <select>
      <option value={1} className="selectOption">
        Popular Lessons
      </option>
      <option value={2} className="selectOption">
        Unpopular Lessons
      </option>
    </select>
  );
};
