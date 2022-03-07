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
    initial: { opacity: 0.8, scale: 1, rotate: 0 },
    animate: {
      opacity: 1,
      scale: 1.25,
      rotate: -10,
      transition: {
        repeat: Infinity,
        repeatType: "mirror",
        duration: 2,
        ease: "easeInOut",
      },
    },
    exit: { opacity: 0, y: -100 },
  };

  return (
    <div className="dark-mode cursor" data-mode={isDark} onClick={handleClick}>
      <div className="dark-mode__switch">
        <div>
          {!isDark ? (
            <FaMoon className="dark-mode__switch-moon" />
          ) : (
            <FaSun className="dark-mode__switch-sun" />
          )}
        </div>
      </div>
    </div>
  );
};

export default DarkMode;
