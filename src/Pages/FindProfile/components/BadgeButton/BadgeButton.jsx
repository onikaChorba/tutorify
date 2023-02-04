import "./BadgeButton.scss";

import Button from "@/components/Button";
export const BadgeButton = (props) => {
  return (
    <div className="buttonBadge">
      <Button green big>
        <div className="buttonBadgeBlock">
          <div className="badgeIconBlock">
            <img src={props.src} alt="email" className="badgeIconBlock__icon" />
          </div>
          <p className="button__text ">{props.text}</p>
        </div>
      </Button>
    </div>
  );
};
