import * as React from "react";
import "./DarkMode.scss";
import { motion, AnimatePresence } from "framer-motion";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";
import { FaSun } from "@react-icons/all-files/fa/FaSun";

const DarkMode = () => {
  const [isDark, setisDark] = React.useState(false);
  const switchStyles = {
    justifyContent: isDark ? "flex-end" : "flex-start",
  };

  const handleClick = () => {
    setisDark(!isDark);
  };

  return (
    <div
      className="container"
      style={switchStyles}
      data-mode={isDark}
      onClick={handleClick}
    >
      <AnimatePresence>
        <motion.div layout className="switch">
          {!isDark ? (
            <FaMoon className="switch__moon" />
          ) : (
            <FaSun className="switch__sun" />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default DarkMode;
