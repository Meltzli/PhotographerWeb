import "./Layout.css";
import { PhotoAbout } from "../PhotoAbout/PhotoAbout";
import { Works } from "../Works/Works";
import { Contacts } from "../Contacts/Contacts";
import { Header } from "../Header/Header";
import { useRef } from "react";
export const Layout = () => {
  const PhotoAboutRef = useRef(null);
  const worksRef = useRef(null);
  const ContactsRef = useRef(null);
  return (
    <div>
      <Header
        PhotoAboutRef={PhotoAboutRef}
        WorksRef={worksRef}
        ContactsRef={ContactsRef}
      />
      <div className="layout">
        <PhotoAbout innerref={PhotoAboutRef} />
        <Works innerref={worksRef} />
      </div>
      <Contacts innerref={ContactsRef} />
    </div>
  );
};
