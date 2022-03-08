import React from "react";
import "./Hero.scss";
import { motion, AnimatePresence } from "framer-motion";
import { BsArrowDown } from "@react-icons/all-files/bs/BsArrowDown";
import { DarkMode } from "../../components";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import CTO from "../CTO/CTO";

const Hero = () => {
  // graphql query for hero data from sanity
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      sanityHero {
        hello
        title
        description
        heroImage {
          asset {
            gatsbyImageData(fit: FILLMAX, placeholder: BLURRED)
          }
        }
      }
    }
  `);

  const { gatsbyImageData } = data.sanityHero.heroImage.asset;

  // hero animation variants
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

  const scrollVariant = {
    initial: { y: "-100vh", opacity: 0 },
    animate: { y: 0, opacity: 1, scale: 1.5 },
    whileHover: { scale: 2 },
    transition: { type: "spring", stiffness: 150, ease: "easeInOut" },
  };

  return (
    <section className="hero">
      <div className="hero__info container grid layout">
        <div className="hero__avatar-container flex">
          <GatsbyImage
            image={gatsbyImageData}
            alt=""
            className="hero__avatar"
          />
        </div>

        <div className="hero__text">
          <p className="hero__hello">
            {data.sanityHero.hello}
            <span className="hero__title">{data.sanityHero.title}</span>
          </p>
          <p className="hero__description">{data.sanityHero.description}</p>
        </div>
        <CTO />
      </div>
      <div className="hero__arrow-container cursor">
        <BsArrowDown className="hero__scroll" />
      </div>
    </section>
  );
};

export default Hero;
