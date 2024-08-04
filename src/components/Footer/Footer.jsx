import React from "react";
import "../css/footer.css";
import { motion } from "framer-motion";
import { fadeIn } from "../../Variants";
import Form from "./Form/Form";
import logo from "../../assets/images/footer-logo.svg";
import yt from "../../assets/images/icon-youtube.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pin from "../../assets/images/icon-pinterest.svg";
import fb from "../../assets/images/icon-facebook.svg";
import ig from "../../assets/images/icon-instagram.svg";

function Footer() {
  const footerLinks = [
    {
      id: 1,
      links: ["Home", "Pricing", "Products", "About Us"],
    },
    {
      id: 2,
      links: ["Careers", "Community", "Privacy Policy"],
    },
  ];

  return (
    <motion.div
      className="footer wrapper"
      // variants={fadeIn("up", 0)}
      initial="hidden"
      whileInView={"visible"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="footer-inner container">
      <motion.p
          className="copyright mobile"
          // variants={fadeIn("right", 0.6)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.1 }}
        >
          Copyright 2020. All Rights Reserved
        </motion.p>
        <div className="logo-socials-container">
          <motion.div
            className="footer-logo-container"
            // variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={logo} alt="footer-logo" className="footer-logo" />
          </motion.div>
          <motion.div
            className="socials-container"
            // variants={fadeIn("left", 0.6)}
            initial="hidden"
            whileInView={"visible"}
            viewport={{ once: false, amount: 0.1 }}
          >
            <img src={fb} alt="" className="facebook-icon" />
            <img src={yt} alt="" className="youtube-icon" />
            <img src={twitter} alt="" className="twitter-icon" />
            <img src={pin} alt="" className="pinterest-icon" />
            <img src={ig} alt="" className="instagram-icon" />
          </motion.div>
        </div>
        <div className="footer-links-wrapper">
          {footerLinks.map((obj) => (
            <motion.div
              key={obj.id}
              className="footer-link-group"
              // variants={fadeIn("right", 0.6)}
              initial="hidden"
              whileInView={"visible"}
              viewport={{ once: false, amount: 0.1 }}
            >
              <ul className="footer-links-container">
                {obj.links.map((link, index) => (
                  <li key={index} className="footer-link">
                    {link}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        <Form />
        <motion.p
          className="copyright desktop"
          // variants={fadeIn("down", 0.6)}
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: false, amount: 0.1 }}
        >
          Copyright 2020. All Rights Reserved
        </motion.p>
      </div>
    </motion.div>
  );
}

export default Footer;
