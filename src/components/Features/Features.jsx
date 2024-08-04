import React from "react";
import "../css/features.css";
import { motion } from "framer-motion";
import featuresData from "./Data";
import { fadeIn } from "../../Variants";

function Features() {
  return (
    <div className="features wrapper">
      <div className="features-inner container">
        <article className="feature-text-container">
          <motion.h2
            className="feature-title"
            // variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.1 }}
          >
            What’s different about Manage?
          </motion.h2>
          <motion.p
            className="feature-parag"
            // variants={fadeIn("right", 0.6)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.1 }}
          >
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </motion.p>
        </article>
        <motion.div className="features-card">
          {featuresData.map((feature) => {
            let featureClassName;
            if (feature.id === "01") {
              featureClassName = "first";
            } else if (feature.id === "02") {
              featureClassName = "second";
            } else {
              featureClassName = "third";
            }
            return (
              <div
                key={feature.id}
                className={`feature-item ${featureClassName}`}
              >
                <div className="feature-item-wrapper desktop">
                  <motion.span
                    className={`feature-item-num ${featureClassName}`}
                    // variants={fadeIn("left", 0.2)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {feature.id}
                  </motion.span>

                  <article
                    className={`feature-item-info-container ${featureClassName}`}
                  >
                    <motion.h3
                      className={`feature-item-title ${featureClassName}`}
                      // variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView={"visible"}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      {feature.title}
                    </motion.h3>
                    <motion.p
                      className={`feature-item-parag ${featureClassName}`}
                      // variants={fadeIn("right", 0.3)}
                      initial="hidden"
                      whileInView={"visible"}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      {feature.parag}
                    </motion.p>
                  </article>
                </div>

                <div className="feature-item-wrapper mobile">
                  <div className="feature-num-title-mobile">
                    <motion.p
                      className={`feature-item-num ${featureClassName}`}
                      variants={fadeIn("left", 0.2)}
                      initial="hidden"
                      whileInView={"visible"}
                      viewport={{ once: false, amount: 0.1 }}
                    >
                      {feature.id}
                    </motion.p>
                    <motion.h3
                      className={`feature-item-title ${featureClassName}`}
                      // variants={fadeIn("right", 0.2)}
                      initial="hidden"
                      whileInView={"visible"}
                      viewport={{ once: false, amount: 0.2 }}
                    >
                      {feature.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    className={`feature-item-parag ${featureClassName}`}
                    variants={fadeIn("up", 0.6)}
                    initial="hidden"
                    whileInView={"visible"}
                    viewport={{ once: false, amount: 0.2 }}
                  >
                    {feature.parag}
                  </motion.p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}

export default Features;
