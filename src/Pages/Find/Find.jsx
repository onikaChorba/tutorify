import Search from "./sections/Search/Search";
import initialDetails from "./FindData";

function Find() {
  return (
    <menu>
      <Search details={initialDetails} />
    </menu>
  );
}
export default Find;
