import React from "react";
import data from "../Find/FindData";
import { ProfileInfoNav } from "./components/ProfileInfoNav/ProfileInfoNav";
import { ProfileInfoCard } from "./section/ProfileInfoCard/ProfileInfoCard";
function FindProfile() {
  return (
    <menu>
      <div className="findProfile" style={{ display: "flex" }}>
        <div style={{ width: "75%" }}>
          {data.initialDetails.map((person) => (
            <ProfileInfoCard person={person} />
          ))}
        </div>
        <div className="findProfileRightBlock"></div>
      </div>
      <ProfileInfoNav />
    </menu>
  );
}
export default FindProfile;
