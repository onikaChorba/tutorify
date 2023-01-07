import userIcon from "@/assets/img/user-icon.png";
import Button from "@/components/Button";

export const CardStudent = () => {
  return (
    <div className="cardName-students">
      <div className="students">
        <img className="students__user" src={userIcon} alt="user"></img>
        <span className="students__number"> 120 Students</span>
      </div>
      <div className="cardButton">
        <Button green small>
          <span className="button__text "> Book</span>
        </Button>
      </div>
    </div>
  );
};
