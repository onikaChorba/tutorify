import "./ProfileInfo.scss";
import data from "../../../Find/FindData";
import { ProfileInfoCard } from "../../components/ProfileInfoCard/ProfileInfoCard";
import { ProfileInfoBadge } from "../../components/ProfileInfoBadge/ProfileInfoBadge";

export const ProfileInfo = () => {
  return (
    <section>
      {data.initialDetails.map((person, key) => [
        <div className="profileInfo">
          <div className="profileInfo__info">
            <ProfileInfoCard person={person} key={key.toString()} />
          </div>
          <div className="profileInfo__badge">
            <ProfileInfoBadge person={person} key={key.toString()} />
          </div>
        </div>,
      ])}
    </section>
  );
};
