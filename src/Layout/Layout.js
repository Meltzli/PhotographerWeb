import "./Layout.css";
import cat from "./cat.jpg";
import dog1 from "./dog1.jpg";
import dog2 from "./dog2.jpg";
import insta from "./Insta.jpg";
import VK from "./VK.png";
export const Layout = () => {
  return (
    <div className="layout">
      <div className="PhotoAbout">
        <div className="photo">
          <img className="PhotoCat" src={cat} alt="cat" />
        </div>
        <div className="AboutTextContainer">
          <p className="AboutText">
            Меня зовут Диана. Я начинающий фотограф. Мне 17 лет.
          </p>
        </div>
      </div>
      <div className="WorksText">
        <samp className="MyWorksText">Мои работы</samp>
      </div>
      <div className="Works">
        <div className="WorkContainer">
          <img className="Work" src={dog1} alt="dog1" />
        </div>
        <div className="WorkContainer">
          <img className="Work" src={dog2} alt="dog2" />
        </div>
      </div>
      <div className="ContactsContainer">
        <samp className="ContactsText">Контакты</samp>
        <div className="InstaContainer">
          <img className="PhotoInsta" src={insta} alt="instagram" />
        </div>
        <div className="VKContainer">
          <img className="PhotoVK" src={VK} alt="VK" />
        </div>
      </div>
    </div>
  );
};
