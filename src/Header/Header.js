import "./Header.css";

export const Header = (props) => {
  const { photoAboutRef, worksRef, contactsRef } = props;

  const onClickToAboutMe = () => {
    photoAboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickToWorksRef = () => {
    worksRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const onClickToContactsRef = () => {
    contactsRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="HeaderContainer">
      <div className="LogoContainer">
        <p className="HeaderText">Diana Photographer </p>
      </div>
      <div className="HeaderNavBar FlexSize">
        <div
          onClick={onClickToAboutMe}
          className="AboutMeAvatarNavBar FlexSize"
        >
          <div className="AboutMeNavBarTextCont divider">
            {" "}
            <button className="NavButton">
              <p className="HeaderText">Обо мне</p>{" "}
            </button>
          </div>
        </div>
        <div className="WorksNavBar FlexSize">
          <div
            onClick={onClickToWorksRef}
            className="WorksNavBarTextCont divider"
          >
            <button className="NavButton">
              <p className="HeaderText">Мои работы</p>
            </button>
          </div>
        </div>
        <div className="ContactsNavBar FlexSize">
          <div
            onClick={onClickToContactsRef}
            className="ContactsNavBarTextCont divider"
          >
            <button className="NavButton">
              <p className="HeaderText">Контакты</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
