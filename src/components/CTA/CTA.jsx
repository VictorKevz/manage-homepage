import React, { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import "../css/cta.css";

function CTA() {
  return (
    <motion.div 
    className={`cta wrapper`}
    // variants={fadeIn("up", 0)}
    initial="hidden"
    whileInView={"visible"}
    viewport={{ once: false, amount: 0.2 }}
    >
      <div className={`cta-inner container`}>
        <motion.h5 
        className="cta-title"
        // variants={fadeIn("left", 0.4)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Simplify how your team works today.
          </motion.h5>

        <motion.a 
        className="link cta-link"
        // variants={fadeIn("right", 0.4)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.2 }}
        >
          Get Started
          </motion.a>
      </div>
    </motion.div>
  );
}

export default CTA;
