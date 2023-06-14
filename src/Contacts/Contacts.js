import "./Contacts.css";
import insta from "../photos/Instapng.png";
import VK from "../photos/VKpng.png";
export const Contacts = () => {
  return (
    <div className="ContactsContainer">
      <p className="ContactsText">Контакты</p>
      <div className="InstaContainer">
        <img className="PhotoInsta" src={insta} alt="instagram" />
      </div>
      <div className="VKContainer">
        <img className="PhotoVK" src={VK} alt="VK" />
      </div>
      <div className="PhoneNumberContainer">
        <p className="PhoneNumberText">Phone number</p>
      </div>
    </div>
  );
};
