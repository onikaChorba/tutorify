import { ProfileInfoBadge } from "../../../FindProfile/components/ProfileInfoBadge/ProfileInfoBadge";

export const CardDetailsBadge = ({ person }) => {
  return (
    <section>
      <ProfileInfoBadge person={person} />
    </section>
  );
};
