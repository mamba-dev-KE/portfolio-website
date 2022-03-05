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
    <motion.div
      className="dark-mode cursor"
      variants={darkModeVariant}
      initial="initial"
      animate="animate"
      data-mode={isDark}
      onClick={handleClick}
    >
      <div className="switch">
        <div>
          {!isDark ? (
            <FaMoon className="switch__moon" />
          ) : (
            <FaSun className="switch__sun" />
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DarkMode;
