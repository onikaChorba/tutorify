import "./FilterButtonBlock.scss";

import { FilterButton } from "../../components/FilterButton/FilterButton";

export const FilterButtonBlock = () => {
  return (
    <section className="filterButtonBlock">
      <FilterButton text="Also speaks" />
      <FilterButton text="From" />
      <FilterButton text="Prise" />
      <FilterButton text="Native speaker" />
      <FilterButton text="Teacher types" />
      <FilterButton text="Category" />
      <FilterButton text="Instant lesson" />
      <FilterButton text="Availabillity" />
      <FilterButton text="Auto-accept" />
    </section>
  );
};
