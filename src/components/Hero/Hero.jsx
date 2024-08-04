import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import { fadeIn } from "../../Variants";
import illustration from "../../assets/images/illustration-intro.svg";

import "../css/hero.css";

function Hero() {
  const textVariants = {
    hidden: { opacity: 0, x: "-90%" },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 1.3,
        ease: "easeIn",
      },
    },
  };
  const imageVariants = {
    hidden: { opacity: 0, y: "0%", x:"90%" },
    visible: {
      opacity: 1,
      x: 0,
      y:0,
      transition: {
        type: "tween",
        delay: 0.3,
        duration: 1.3,
        ease: "easeIn",
      },
    },
  };
  return (
    <div className={`hero wrapper`}>
      <Navbar />
      <motion.div className={`hero-inner container`}>
        <AnimatePresence mode="wait">
        <motion.div 
        className="hero-image-container"
        variants={imageVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.img
            src={illustration}
            alt="illustration-image"
            className="hero-img"
            variants={fadeIn("up", 0.1)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.1 }}
          />
        </motion.div>
        </AnimatePresence>
        <AnimatePresence mode="wait">
        <motion.section
          className={`hero-text-container`}
          variants={textVariants}
          initial="hidden"
          animate="visible"
        >
          
          <motion.h1
            className="hero-title"
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.2 }}
            // exit="exit"
          >
            Bring everyone together to build better products.
          </motion.h1>
          
          <motion.p 
          className="hero-parag"
          variants={fadeIn("right", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.1 }}
          >
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </motion.p>
          <motion.a 
          className="link hero-cta"
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.1 }}
          >
            Get Started</motion.a>
        </motion.section>
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default Hero;
