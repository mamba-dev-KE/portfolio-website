import React from "react";
import "./Socials.scss";
import { AiOutlineGithub } from "@react-icons/all-files/ai/AiOutlineGithub";
import { AiOutlineTwitter } from "@react-icons/all-files/ai/AiOutlineTwitter";
import { AiFillLinkedin } from "@react-icons/all-files/ai/AiFillLinkedin";
import { AiFillCodepenCircle } from "@react-icons/all-files/ai/AiFillCodepenCircle";
import { motion, AnimatePresence } from "framer-motion";

const Socials = () => {
  return (
    <AnimatePresence exitBeforeEnter={true} onExitComplete={true}>
      <motion.div
        initial={{ opacity: 0, scale: 0.1 }}
        animate={{ opacity: 1, scale: 1.1 }}
        transition={{ type: "spring", duration: 0.5, delay: 1 }}
        className="socials flex cursor"
      >
        <AiOutlineGithub className="social__icon" />
        <AiOutlineTwitter className="social__icon" />
        <AiFillLinkedin className="social__icon" />
        <AiFillCodepenCircle className="social__icon" />
      </motion.div>
    </AnimatePresence>
  );
};

export default Socials;
