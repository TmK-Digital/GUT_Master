import React from "react";
import { Link } from "react-router-dom";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvasNavigation" id="offcanvas-navigation">
      <ul>
        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About Us</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/service"}>Services</Link>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/strategy"}>Strategy</Link>
        </li>
        

        <li className="menuItemHasChildren">
          <Link to={process.env.PUBLIC_URL + "#/"}>Assets</Link>
          <ul className="subMenu">
           
            <li>
              <Link to={process.env.PUBLIC_URL + "/asset-portfolio"}>Asset Portfolio</Link>
              
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/nft-assets"}>NFT Assets</Link>
            </li>
          </ul>
        </li>
        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
