import * as React from "react";
import "./NavBar.scss";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import DarkMode from "../DarkMode/DarkMode";

const NavBar = () => {
  const [isOpen, setisOpen] = React.useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const navStyles = {
    transform: "translateX(-100%)",
  };

  return (
    <header className="header flex">
      <div className="header__container flex">
        <h3 className="header__logo">Joseph</h3>
        <nav className="nav" style={isOpen ? navStyles : null}>
          <ul className="nav__list">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              listItem => (
                <li key={listItem}>{listItem}</li>
              )
            )}
          </ul>
        </nav>
        <DarkMode />
        <div className="header__menu" onClick={handleClick}>
          {isOpen ? (
            <AiOutlineClose className="header__menu-icon header__menu-icon--close" />
          ) : (
            <AiOutlineMenu className="header__menu-icon" />
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
