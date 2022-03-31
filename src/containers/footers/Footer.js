import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagram,
  FaDiscord,
 
 
} from "react-icons/fa";
import { MdExpandLess } from "react-icons/md";

const Footer = ({ theme }) => {
  const [scroll, setScroll] = useState(0);
  const [top, setTop] = useState(0);

  useEffect(() => {
    setTop(100);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    setScroll(window.scrollY);
  };
  return (
  
    <footer style={{marginTop:'50'}}
    
      className={`footer-area ${theme === "white" ? "footer--2" : "footer--1"}`}
    >
      <div
        className={`dg__footer__container ${
          theme === "white" ? "bg--white" : "bg__color--2"
        }`}
      >
        <div className="container">
          <div className="row">
            {/* Start Single Widget */}
           
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 col-12">
              <div className="footer__widget">
                <br />
                <br />
                <h4>Our Mission</h4>
                <div className="footer__inner">
             <p className="footer-bottom">To tokenise real world assets enabling a platform for both investment & asset growth.</p>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 xs__mt--40">
              <div className="footer__widget information">
              <br />
                <br />
                <h4>Our Vision</h4>
                <div className="footer__inner">
                <p className="footer-bottom">Provide a fully transparent, decentralised & self sustainable eco system. Empowering union members bith financially & democractically.</p>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 md__mt--40 sm__mt--40">
              <div className="footer__widget support">
              <br />
                <br />
                <h4>Our Values</h4>
                <div className="footer__inner">
                <p className="footer-bottom">Removing Middlemen & Corruption
                                            Enabling asset & business growth
                                            Providing a decentralised governance.
                                           </p>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
            {/* Start Single Widget */}
            <div className="col-lg-3 col-md-6 col-sm-6 md__mt--40 sm__mt--40">
              <div className="footer__widget resources">
              <br />
                <br />
                <h4>Contact</h4>
                <div className="footer__inner">
                  <ul>
                    <li>info@generationalunion.com</li>
                    <li>
                      Address:
                      <br /> 71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ
                    </li>
                    <li>
                      Phone:
                      <br /> 074496777703
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* End Single Widget */}
          </div>
        </div>
      </div>
      <div
        className={`copyright ${
          theme === "white" ? "bg__color--1" : "bg--black"
        }`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-sm-6 col-12">
              <div className="copyright__inner">
                <p className="copyright-text">
                  &copy; 2022 Generation Union all rights reserved.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-6 col-12">
              <ul className="footer__right social__icon">
                <li>
                  <a
                    href="//facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
                <li>
                  <a
                    href="//twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitterSquare />
                  </a>
                </li>
                <li>
                  <a
                    href="//vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </li>
                <li>
                  <a
                    href="//vimeo.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaDiscord />
                  </a>
                </li>
                
              </ul>
            </div>
          </div>
        </div>
      </div>
      <button
        className={`scroll-top ${scroll > top ? "show" : ""}`}
        onClick={() => scrollToTop()}
      >
        <MdExpandLess />
      </button>
    </footer>
  );
};

export default Footer;
