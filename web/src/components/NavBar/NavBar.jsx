import React from "react";
import "./NavBar.scss";
import { AiOutlineMenu } from "@react-icons/all-files/ai/AiOutlineMenu";
import { AiOutlineClose } from "@react-icons/all-files/ai/AiOutlineClose";
import { motion, AnimatePresence } from "framer-motion";
import { Socials } from "../../components";
import DarkMode from "../DarkMode/DarkMode";
import { Link } from "react-scroll";

const NavBar = () => {
  const [isOpen, setisOpen] = React.useState(false);

  // click handler function to toggle navbar
  const handleClick = () => {
    setisOpen(!isOpen);
  };

  /* animation Variants */
  const headerVariant = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: {
      duration: 0.35,
    },
  };

  const mountVariant = {
    invinsible: { opacity: 0, y: -50, scale: 0.2 },
    visible: { opacity: 1, y: 0, x: 0, scale: 1 },
    transition: { type: "spring", stiffness: 1000, ease: "easeIn" },
  };

  const navVariant = {
    hidden: { opacity: 0.2, x: "100vw" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        stiffness: 200,
      },
    },
    transition: { type: "spring", stiffness: 1000, ease: "easeIn" },

    exit: { opacity: 0, x: "-100vw", scale: 0 },
  };

  //  transition: { type: "spring", delay: 1, stiffness: 200, ease: "easeInOut" },

  return (
    <header className="header flex">
      <div className="header__container flex">
        <span className="header__logo cursor">Joseph</span>
        <DarkMode />
        <motion.nav
          variants={navVariant}
          initial="hidden"
          animate={isOpen ? "visible" : ""}
          transition="transition"
          exit="exit"
          className="nav grid"
        >
          <ul className="nav__list flex">
            {["Home", "About", "Projects", "Skills", "Contact"].map(
              listItem => (
                <Link
                  spy={true}
                  to={listItem.toLowerCase()}
                  offset={-60}
                  duration={500}
                  smooth={true}
                  activeClass="activeClass"
                >
                  <li className="cursor" key={listItem} onClick={handleClick}>
                    {listItem}
                  </li>
                </Link>
              )
            )}
          </ul>
          <Socials />
        </motion.nav>

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
