import "./Layout.css";
import { PhotoAbout } from "../PhotoAbout/PhotoAbout";
import { Works } from "../Works/Works";
import { Contacts } from "../Contacts/Contacts";
import { Header } from "../Header/Header";
export const Layout = () => {
  return (
    <div>
      <Header />
      <div className="layout">
        <PhotoAbout />
        <Works />
      </div>
      <Contacts />
    </div>
  );
};
