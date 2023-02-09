import "./ProfileInfoNav.scss";
export const ProfileInfoNav = () => {
  const navInfo = [
    { text: "Education" },
    { text: "Work experience" },
    { text: "Certifications" },
  ];
  return (
    <section className="profileInfoNav">
      <nav>
        <ul className="infoNavLinks">
          {navInfo.map((el, index) => (
            <li className="infoNavLink" key={index}>
              {el.text}
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
