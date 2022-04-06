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

  const closeMenu = () => {
    setShowMenu(false);
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
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#technology">Technologies</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
      </ul>

      <ul className="nav-social-icons">
        <li>
          <IconButton
            aria-label="linkedin"
            href="https://linkedin.com/in/john-almazan/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon
              sx={{
                fontSize: 28,
                color: "white",
              }}
            />
          </IconButton>
        </li>
        <li>
          <IconButton
            aria-label="github"
            href="https://github.com/almazankaze"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <a href="#projects" onClick={closeMenu}>
              Projects
            </a>
          </li>
          <li>
            <a href="#technology" onClick={closeMenu}>
              Technologies
            </a>
          </li>
          <li>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
          </li>
        </ul>

        <ul className="mobile-icon-links">
          <li>
            <IconButton
              aria-label="linkedin"
              href="https://linkedin.com/in/john-almazan/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon
                sx={{
                  fontSize: 28,
                  color: "white",
                }}
              />
            </IconButton>
          </li>
          <li>
            <IconButton
              aria-label="github"
              href="https://github.com/almazankaze"
              target="_blank"
              rel="noopener noreferrer"
            >
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
