import React from "react";
import { motion } from "framer-motion";
import AboutBio from "../components/about/AboutBio";
import AboutStack from "../components/about/AboutStack";

function About() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutBio />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutStack />
      </motion.div>
    </>
  );
}

export default About;
