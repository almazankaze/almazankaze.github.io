import React from "react";
import IconButton from "@mui/material/IconButton";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="main-nav">
      <div class="nav-logo">
        <h1>John Almazan</h1>
      </div>

      <ul class="nav-links">
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

      <ul class="nav-social-icons">
        <li>
          <IconButton aria-label="add">
            <LinkedInIcon
              sx={{
                fontSize: 28,
                color: "white",
              }}
            />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="add">
            <GitHubIcon
              sx={{
                fontSize: 28,
                color: "white",
              }}
            />
          </IconButton>
        </li>
        <li>
          <IconButton aria-label="add">
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
  );
};

export default Navbar;
