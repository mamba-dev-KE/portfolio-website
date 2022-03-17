import React from "react";
import "./Footer.scss";
import { Socials } from "../../components";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer grid">
      <div className="footer__info container flex">
        <div className="footer__copyright">&copy; {year} Joseph Maramba.</div>
        <div className="footer__socials">
          <Socials />
        </div>
        <div className="footer__attribution">
          <span>
            Hand Icon by
            <a href="https://icons8.com/l/3d-hands/" target="_blank">            
              icons8.com
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
