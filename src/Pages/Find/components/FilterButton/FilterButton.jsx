import "./FilterButton.scss";

export const FilterButton = () => {
  const buttons = [
    {
      name: "Also speaks",
      value: "also",
    },
    {
      name: "Native speaks",
      value: "native",
    },
    {
      name: "English",
      value: "english",
    },
  ];
  return (
    <div>
      {buttons.map((type, index) => (
        <>
          <button key={index} value={type.value} className="filterButton">
            <p className="filterButton__text">{type.name}</p>
          </button>
        </>
      ))}
    </div>
  );
};
