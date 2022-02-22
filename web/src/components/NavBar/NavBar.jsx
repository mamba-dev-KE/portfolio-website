import * as React from "react";
import "./NavBar.scss";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";

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
        <h3 className="header__logo cursor">Joseph</h3>
        <nav className="nav" style={isOpen ? navStyles : null}>
          <ul className="nav__list flex">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              listItem => (
                <li key={listItem}>{listItem}</li>
              )
            )}
          </ul>
        </nav>
        <button className="header__menu cursor" onClick={handleClick}>
          {isOpen ? (
            <AiOutlineClose className="header__menu-icon header__menu-icon--close" />
          ) : (
            <AiOutlineMenu className="header__menu-icon" />
          )}
        </button>
      </div>
    </header>
  );
};

export default NavBar;
