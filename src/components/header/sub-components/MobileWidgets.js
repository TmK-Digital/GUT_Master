import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaPinterestP,
  FaPhone,
  FaRegEnvelope,
  FaUserAlt
} from "react-icons/fa";

const MobileWidgets = () => {
  return (
    <div className="offcanvasWidgetArea">
      <div className="offCanvasContactWidget">
        <div className="headerContactInfo">
          <ul className="headerContactInfoList">
            <li>
              <FaUserAlt />{" "}
              <Link to={process.env.PUBLIC_URL + "/login-register"}>
                Login / Register{" "}
              </Link>
            </li>
            <li>
              <FaPhone /> <a href="tel://07496777703">07496777703 </a>
            </li>
            <li>
              <FaRegEnvelope />{" "}
              <a href="mailto:info@yourdomain.com">info@generationalunion.com</a>
            </li>
          </ul>
        </div>
      </div>
      {/*Off Canvas Widget Social Start*/}
      <div className="offCanvasWidgetSocial">
        <a style={{color: 'white'}}
          href="//twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Twitter"
        >
          <FaTwitter />
        </a>
        <a style={{color: 'white'}}
          href="//instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a style={{color: 'white'}}
          href="//facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Facebook"
        >
          <FaFacebookF />
        </a>
        <a style={{color: 'white'}}
          href="//pinterest.com"
          target="_blank"
          rel="noopener noreferrer"
          title="Pinterest"
        >
          <FaPinterestP />
        </a>
      </div>
      {/*Off Canvas Widget Social End*/}
    </div>
  );
};

export default MobileWidgets;
