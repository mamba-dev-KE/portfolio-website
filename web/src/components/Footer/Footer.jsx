import React from "react";
import Socials from "../Socials/Socials";
import "./Footer.scss";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer grid">
      <div className="footer__info container flex">
        <div className="footer__copyright">&copy; {year} Joseph Maramba.</div>
        <div className="footer__socials">
          <Socials />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
