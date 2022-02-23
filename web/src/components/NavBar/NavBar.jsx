import * as React from "react";
import "./NavBar.scss";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { motion, AnimatePresence } from "framer-motion";

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
        <motion.span
          initial={{ opacity: 0, y: -50, scale: 0.2 }}
          animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
          className="header__logo cursor"
        >
          Joseph
        </motion.span>
        <nav className="nav grid" style={isOpen ? navStyles : null}>
          <ul className="nav__list flex">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              listItem => (
                <motion.li className="cursor" key={listItem}>
                  {listItem}
                </motion.li>
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
