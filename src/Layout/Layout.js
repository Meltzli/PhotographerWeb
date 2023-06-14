import "./Layout.css";
import { PhotoAbout } from "../PhotoAbout/PhotoAbout";
import { Works } from "../Works/Works";
import { Contacts } from "../Contacts/Contacts";
export const Layout = () => {
  return (
    <div className="layout">
      <PhotoAbout />
      <Works />
      <Contacts />
    </div>
  );
};
