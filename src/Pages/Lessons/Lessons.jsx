import React from "react";
import { LessonsBlocks } from "./sections/LessonsBlocks/LessonsBlocks";
import { FreeLessons } from "./sections/FreeLessons/FreeLessons";
function Lessons() {
  return (
    <menu>
      <FreeLessons />
      <LessonsBlocks />
    </menu>
  );
}
export default Lessons;
