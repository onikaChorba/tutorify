import userIcon from "@/assets/img/user-icon.png";

export const CardStudent = () => {
  return (
    <div className="cardName-students">
      <div className="students">
        <img className="students__user" src={userIcon} alt="user"></img>
        <span className="students__number"> 120 Students</span>
      </div>
    </div>
  );
};
