import { ProfileInfoCard } from "../ProfileInfoCard/ProfileInfoCard";
import { ProfileInfoBadge } from "@/Pages/Find/components/ProfileInfoBadge/ProfileInfoBadge";

export const ProfileInfo = ({ person }) => {
  return (
    <section className="profileInfo">
      <div className="profileInfo__info">
        <ProfileInfoCard person={person} key={person.toString()} />
      </div>
      <div className="profileInfo__badge">
        <ProfileInfoBadge person={person} key={person.toString()} />
      </div>
    </section>
  );
};
