import "./LessonsBlocks.scss";
import { LessonsBlock } from "../../components/LessonsBlock/LessonsBlock";
import userIcon from "@/assets/img/user-icon.png";
export const LessonsBlocks = () => {
  return (
    <section className="lessonsBlocks">
      <div className="lessonsBlocks__img">
        <img src={userIcon} alt="user" className="lessonsImg" />
        <h2 className="lessonsTitle">Most popular Free English courses</h2>
      </div>
      <LessonsBlock />
    </section>
  );
};
