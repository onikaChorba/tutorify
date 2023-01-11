import React from "react";

import { ProfileInfoNav } from "./components/ProfileInfoNav/ProfileInfoNav";
import { ProfileInfo } from "./section/ProfileInfo/ProfileInfo";
function FindProfile() {
  return (
    <menu>
      <ProfileInfo />
      <ProfileInfoNav />
    </menu>
  );
}
export default FindProfile;
