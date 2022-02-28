import React from "react";
import "./Hero.scss";
import { StaticImage } from "gatsby-plugin-image";
import avatar from "../../assets/images/avataaars.svg";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDown } from "@react-icons/all-files/bs/BsArrowDown";

const Hero = () => {
  const heroVariant = {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: {
      delay: 2,
      type: "spring",
      stiffness: 80,
    },
  };

  return (
    <section className="hero">
      <motion.div className="hero__info container flex layout">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeIn" }}
          className="hero__avatar-container flex"
        >
          <img src={avatar} alt="" />
        </motion.div>
        <motion.p
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="hero__hello"
        >
          Hello, I'm Joseph
        </motion.p>
        <motion.h1
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeIn" }}
          className="hero__title"
        >
          I build stuff for the web.
        </motion.h1>
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
      </motion.div>
    </section>
  );
};

export default Hero;
