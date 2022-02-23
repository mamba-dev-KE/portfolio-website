import * as React from "react";
import "./NavBar.scss";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { motion, AnimatePresence } from "framer-motion";
import Socials from "../Socials/Socials";

const NavBar = () => {
  const [isOpen, setisOpen] = React.useState(false);

  const handleClick = () => {
    setisOpen(!isOpen);
  };

  const navStyles = {
    // transform: "translateX(-100%)",
  };

  /* Animation Variants */
  const mountVariant = {
    invinsible: { opacity: 0, y: -50, scale: 0.2 },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
    transition: { duration: 3, ease: "easeIn" },
    hover: { scale: 1.1, opacity: 0.9 },
  };

  const navVariant = {
    invinsible: { opacity: 0, y: "-100vh" },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: "100vh" },
    transition: { duration: 10, ease: "easeInOut" },
  };

  return (
    <header className="header flex">
      <div className="header__container flex">
        <motion.span
          variants={mountVariant}
          initial="invinsible"
          animate="visible"
          transition="transition"
          whileHover="hover"
          className="header__logo cursor"
        >
          Joseph
        </motion.span>
        <AnimatePresence>
          <motion.nav
            variants={navVariant}
            initial="invinsible"
            animate={isOpen ? "visible" : ""}
            transition="transition"
            exit="exit"
            className="nav grid"
            style={isOpen ? navStyles : null}
          >
            <ul className="nav__list flex">
              {["Home", "About", "Projects", "Skills", "Contact"].map(
                listItem => (
                  <motion.li
                    whileHover={{
                      opacity: 0.9,
                      textShadow: "1px 0 6px var(--red-8)",
                    }}
                    transition={{ duration: 0.05, ease: "easeOut" }}
                    className="cursor"
                    key={listItem}
                  >
                    {listItem}
                  </motion.li>
                )
              )}
            </ul>
            <Socials />
          </motion.nav>
        </AnimatePresence>
        <motion.button
          variants={mountVariant}
          initial="invinsible"
          animate="visible"
          transition="transition"
          whileHover="hover"
          className="header__menu cursor"
          onClick={handleClick}
        >
          {isOpen ? (
            <AiOutlineClose className="header__menu-icon header__menu-icon--close" />
          ) : (
            <AiOutlineMenu className="header__menu-icon" />
          )}
        </motion.button>
      </div>
    </header>
  );
};

export default NavBar;
