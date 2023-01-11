import { ProfileInfoCard } from "../../components/ProfileInfoCard/ProfileInfoCard";
import data from "../../../Find/FindData";
export const ProfileInfo = () => {
  return (
    <section className="profileInfo">
      <div className="profileInfo__info">
        {data.initialDetails.map((person) => (
          <ProfileInfoCard person={person} />
        ))}
      </div>
      <div className="profileInfo__infoShot">
        <>Hi</>
      </div>
    </section>
  );
};
