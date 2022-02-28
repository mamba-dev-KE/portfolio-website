import React from "react";
import "./DarkMode.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaSun } from "@react-icons/all-files/fa/FaSun";

const DarkMode = () => {
  const [isDark, setisDark] = React.useState(false);

  const handleClick = () => {
    setisDark(!isDark);
  };

  const darkModeVariant = {
    initial: { opacity: 0, scale: 0, y: 0 },
    animate: { opacity: 1, scale: 1.5 },
    transition: { duration: 0.5, ease: "easeIn" },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <div className="dark-mode cursor" data-mode={isDark} onClick={handleClick}>
      <div layout className="switch">
        <div>
          {!isDark ? (
            <FaMoon className="switch__moon" />
          ) : (
            <FaSun className="switch__sun" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
