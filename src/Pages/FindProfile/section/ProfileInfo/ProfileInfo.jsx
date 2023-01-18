import "./ProfileInfo.scss";
import data from "../../../Find/FindData";
import { ProfileInfoCard } from "../../components/ProfileInfoCard/ProfileInfoCard";
import { ProfileInfoBadge } from "../../components/ProfileInfoBadge/ProfileInfoBadge";

export const ProfileInfo = ({ person }) => {
  return (
    <section className="profileInfo">
      <div className="profileInfo__info">
        <div>
          {data.initialDetails.map((person, key) => (
            <ProfileInfoCard person={person} key={key.toString()} />
          ))}
        </div>
      </div>
      <div className="profileInfo__badge">
        {data.initialDetails.map((person, key) => (
          <ProfileInfoBadge person={person} key={key.toString()} />
        ))}
      </div>
    </section>
  );
};
