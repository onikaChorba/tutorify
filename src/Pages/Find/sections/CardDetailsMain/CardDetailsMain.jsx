import { ProfileInfoCard } from "../ProfileInfoCard/ProfileInfoCard";

export const CardDetailsMain = ({ person }) => {
  return (
    <section>
      <ProfileInfoCard person={person} />
    </section>
  );
};
