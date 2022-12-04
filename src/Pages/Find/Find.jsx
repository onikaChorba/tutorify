import React from "react";
import Search from "./components/Search/Search";
import { CardInfo } from "./components/СardInfo/CardInfo";
import initialDetails from "./FindData";
function Find() {
  return (
    <menu>
      <Search details={initialDetails} />
      <CardInfo />
    </menu>
  );
}
export default Find;
