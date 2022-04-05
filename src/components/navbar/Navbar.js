import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import "./navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="main-nav">
      <div className="menu-btn">
        {showMenu ? (
          <IconButton aria-label="close" onClick={toggleMenu}>
            <CloseIcon sx={{ fontSize: 36, color: "white" }} />
          </IconButton>
        ) : (
          <IconButton aria-label="menu" onClick={toggleMenu}>
            <MenuIcon sx={{ fontSize: 36, color: "white" }} />
          </IconButton>
        )}
      </div>

      <div className="nav-logo">
        <h1>John</h1>
        <h1 className="lastName">&nbsp;Almazan</h1>
      </div>

      <ul className="nav-links">
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Technologies">Technologies</a>
        </li>
        <li>
          <a href="#About">About</a>
        </li>
      </ul>

      <ul className="nav-social-icons">
        <li>
          <IconButton aria-label="linkedin">
            <LinkedInIcon
              sx={{
                fontSize: 28,
                color: "white",
              }}
            />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="github">
            <GitHubIcon
              sx={{
                fontSize: 28,
                color: "white",
              }}
            />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="youtube">
            <YouTubeIcon
              sx={{
                fontSize: 28,
                color: "white",
              }}
            />
          </IconButton>
        </li>
      </ul>

      <div className={showMenu ? "mobile-nav-menu show" : "mobile-nav-menu"}>
        <ul className="mobile-nav-links">
          <li>
            <a href="#Projects">Projects</a>
          </li>
          <li>
            <a href="#Technologies">Technologies</a>
          </li>
          <li>
            <a href="#About">About</a>
          </li>
        </ul>

        <ul className="mobile-icon-links">
          <li>
            <IconButton aria-label="linkedin">
              <LinkedInIcon
                sx={{
                  fontSize: 28,
                  color: "white",
                }}
              />
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="github">
              <GitHubIcon
                sx={{
                  fontSize: 28,
                  color: "white",
                }}
              />
            </IconButton>
          </li>
          <li>
            <IconButton aria-label="youtube">
              <YouTubeIcon
                sx={{
                  fontSize: 28,
                  color: "white",
                }}
              />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
