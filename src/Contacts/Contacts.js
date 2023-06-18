import "./Contacts.css";
import insta from "../photos/Instapng.png";
import VK from "../photos/VKpng.png";
import PhonePng from "../photos/phonepng.png";
export const Contacts = ({ innerref }) => {
  return (
    <div>
      <div ref={innerref} className="ContactsContainer">
        <div className="InstaContainer">
          <a href="https://vk.com/krotova_diano4ka">
            <img className="PhotoInsta" src={insta} alt="instagram" />
          </a>
        </div>
        <div className="VKContainer">
          <a href="https://vk.com/krotova_diano4ka">
            <img className="PhotoVK" src={VK} alt="VK" />
          </a>
        </div>
        <div className="PhoneNumberContainer">
          <img className="PhonePng" src={PhonePng} alt="PhoneNumber" />
          <p className="PhoneNumberText">7910912319231</p>
        </div>
      </div>
    </div>
  );
};
