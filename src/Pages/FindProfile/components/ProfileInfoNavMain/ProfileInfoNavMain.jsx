import "./ProfileInfoNavMain.scss";
export const ProfileInfoNavMain = () => {
  const navInfoMain = [
    { text: "About" },
    { text: "Schedule" },
    { text: "Reviews" },
    { text: "Resume" },
  ];
  return (
    <section className="profileInfoNavMain">
      <nav>
        <ul className="infoNavMainLinks">
          {navInfoMain.map((el) => (
            <li className="infoNavMainLink">{el.text}</li>
          ))}
        </ul>
      </nav>
    </section>
  );
};
