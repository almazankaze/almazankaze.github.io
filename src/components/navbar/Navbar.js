import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import SocialLinks from "./SocialLinks";

import { useGlobalContext } from "../../context";

import "./navbar.css";

const Navbar = () => {
  const { setShowMenu, showMenu } = useGlobalContext();

  return (
    <div className="navbar-container">
      <div className="main-nav container">
        <div className="left-nav">
          <h1>John</h1>
          <h1 className="lastName">&nbsp;Almazan</h1>
        </div>

        <div className={showMenu ? "middle-nav show" : "middle-nav"}>
          <h1 className="sidebar-name">John</h1>
          <ul className="middle-nav-menu">
            <li className="nav-link">
              <a href="#projects" onClick={() => setShowMenu(false)}>
                Projects
              </a>
            </li>
            <li className="nav-link">
              <a href="#technology" onClick={() => setShowMenu(false)}>
                Technologies
              </a>
            </li>
            <li className="nav-link">
              <a href="#about" onClick={() => setShowMenu(false)}>
                About
              </a>
            </li>
          </ul>
          <div className="mobile-social-links">
            <SocialLinks />
          </div>
        </div>

        <div className="right-nav">
          <SocialLinks />
        </div>

        <div className="menu-btn">
          {showMenu ? (
            <CloseIcon
              className="menu-icon"
              onClick={() => setShowMenu(false)}
              titleAccess="close"
            />
          ) : (
            <MenuIcon
              className="menu-icon"
              onClick={() => setShowMenu(true)}
              titleAccess="menu"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
