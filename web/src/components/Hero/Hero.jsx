import React from "react";
import "./Hero.scss";
import { StaticImage } from "gatsby-plugin-image";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero">
      <motion.div
        initial={{ y: "-100vh", opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          delay: 2,
          type: "spring",
          stiffness: 80,
        }}
        className="hero__container"
      >
        <StaticImage
          src="../../assets/images/code.jpeg"
          className="hero__image"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
