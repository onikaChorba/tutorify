import React from "react";
import initialDetails from "../Find/FindData";

import { ProfileInfo } from "./section/ProfileInfo/ProfileInfo";
function FindProfile() {
  return (
    <menu>
      <ProfileInfo person={initialDetails} />
    </menu>
  );
}
export default FindProfile;
