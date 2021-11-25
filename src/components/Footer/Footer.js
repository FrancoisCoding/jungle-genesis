import React from "react";
import "./Footer.css";
import { BsDiscord, BsTwitter } from "react-icons/bs";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className="footer-container">
      <Link to="navbar" spy={true} smooth={true}></Link>
      <div className="footer-buttons">
        <a
          href="https://twitter.com/Jungle_Genesis"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="footer-button" />
        </a>
      </div>
      <p className="copyright">&#169;FrancoisCoding</p>
      <p>All Rights Reserved 2021</p>
    </div>
  );
};

export default Footer;
