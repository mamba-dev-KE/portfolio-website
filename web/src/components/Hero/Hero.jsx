import React from "react";
import "./Hero.scss";
import avatar from "../../assets/images/avataaars.svg";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDown } from "@react-icons/all-files/bs/BsArrowDown";
import { DarkMode } from "../../components";

const Hero = () => {
  // Animation variants
  const heroVariant = {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      delay: 2,
      type: "spring",
      stiffness: 80,
    },
  };
  const avatarVariant = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 0.5, ease: "easeIn" },
  };

  const paraVariant = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.5, ease: "easeIn" },
  };

  const headingVariant = {
    initial: { y: 0, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { duration: 1.5, ease: "easeIn" },
  };

  return (
    <section className="hero">     
      <div className="hero__info container flex layout">
        <DarkMode />
        <div className="hero__avatar-container flex">
          <img src={avatar} alt="" className="hero__avatar" />
        </div>
        <p className="hero__hello">Hello, I'm Joseph</p>
        <h1 className="hero__title">I build stuff for the web.</h1>
        <AnimatePresence exitBeforeEnter={true}>
          <motion.div
            initial={{ y: "-100vh", opacity: 0 }}
            animate={{ y: 0, opacity: 1, scale: 1.5 }}
            whileHover={{
              scale: 2,
            }}
            transition={{
              type: "spring",
              stiffness: 150,
              ease: "easeInOut",
            }}
            className="hero__arrow-container"
          >
            <BsArrowDown className="hero__scroll" />
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
