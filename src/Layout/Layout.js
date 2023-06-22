import "./Layout.css";
import { PhotoAbout } from "../PhotoAbout/PhotoAbout";
import { Works } from "../Works/Works";
import { Contacts } from "../Contacts/Contacts";
import { Header } from "../Header/Header";
import { useRef } from "react";

export const Layout = () => {
  const photoAboutRef = useRef(null);
  const worksRef = useRef(null);
  const contactsRef = useRef(null);
  return (
    <div>
      <Header
        photoAboutRef={photoAboutRef}
        worksRef={worksRef}
        contactsRef={contactsRef}
      />
      <div className="layout">
        <PhotoAbout innerref={photoAboutRef} />
        <Works innerref={worksRef} />
      </div>
      <Contacts innerref={contactsRef} />
    </div>
  );
};
