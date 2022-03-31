import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";

const Navigation = () => {
  return (
    <nav className="mainmenu__nav">
      <ul className="mainmenu">
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/"}>
            Home 
          </Link>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/about"}>
            About
          </Link>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/service"}>
            Services 
          </Link>
        
        </li>

        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "/strategy"}>
            Strategy
          </Link>
        </li>
        <li className="drop">
          <Link to={process.env.PUBLIC_URL + "#/"}>
            Assets<IoIosArrowDown />
          </Link>
          <ul className="dropdown">
            <li>
              <Link to={process.env.PUBLIC_URL + "/asset-portfolio"}>Asset Portfolio</Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/nft-asset"}>
                NFT Assets
              </Link>
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

export default Navigation;
