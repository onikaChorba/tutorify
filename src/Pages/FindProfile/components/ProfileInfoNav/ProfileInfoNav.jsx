import "./ProfileInfoNav.scss";
export const ProfileInfoNav = () => {
  return (
    <section className="profileInfoNav">
      <nav>
        <ul className="infoNavLinks">
          <li className="infoNavLink">About</li>
          <li className="infoNavLink">Schedule</li>
          <li className="infoNavLink">Reviews</li>
          <li className="infoNavLink">Resume</li>
        </ul>
      </nav>
    </section>
  );
};
