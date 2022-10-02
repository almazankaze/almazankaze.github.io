import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = () => {
    setShowMenu(true);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  return (
    <div className="main-nav">
      <div className="left-nav">
        <h1>John</h1>
        <h1 className="lastName">&nbsp;Almazan</h1>
      </div>

      <div className={showMenu ? "middle-nav show" : "middle-nav"}>
        <h1 className="sidebar-name">John</h1>
        <ul className="middle-nav-menu">
          <li className="nav-link">
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li className="nav-link">
            <a href="#technology" onClick={closeMenu}>
              Technologies
            </a>
          </li>
          <li className="nav-link">
            <a href="#about" onClick={closeMenu}>
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
            onClick={closeMenu}
            titleAccess="close"
          />
        ) : (
          <MenuIcon
            className="menu-icon"
            onClick={openMenu}
            titleAccess="menu"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
