import "./Header.css";

export const Header = ({ PhotoAboutRef, WorksRef }) => {
  const onClickToAboutMe = () => {
    PhotoAboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickToWorksRef = () => {
    WorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickToContactsRef = () => {
    WorksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="HeaderContainer">
      <div className="LogoContainer">
        <p> Diana Photographer </p>
      </div>
      <div className="HeaderNavBar">
        <div onClick={onClickToAboutMe} className="AboutMeAvatarNavBar">
          <div className="AboutMeNavBarTextCont divider">
            <p>AboutMe</p>
          </div>
        </div>
        <div className="WorksNavBar">
          <div
            onClick={onClickToWorksRef}
            className="WorksNavBarTextCont divider"
          >
            <p>Works</p>
          </div>
        </div>
        <div className="ContactsNavBar">
          <div
            onClick={onClickToContactsRef}
            className="ContactsNavBarTextCont divider"
          >
            <p>PupaLupa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
