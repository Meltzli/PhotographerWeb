import "./Header.css";
export const Header = () => {
  return (
    <div className="HeaderContainer">
      <div className="LogoContainer">
        <p> Diana Photographer </p>
      </div>
      <div className="HeaderNavBar">
        <div className="AboutMeAvatarNavBar">
          <div className="AboutMeNavBarTextCont divider">
            <p>AboutMe</p>
          </div>
        </div>
        <div className="WorksNavBar">
          <div className="WorksNavBarTextCont divider">
            <p>Works</p>
          </div>
        </div>
        <div className="ContactsNavBar">
          <div className="ContactsNavBarTextCont divider">
            <p>PupaLupa</p>
          </div>
        </div>
      </div>
    </div>
  );
};
