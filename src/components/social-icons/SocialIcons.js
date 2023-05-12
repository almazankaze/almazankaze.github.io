import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

import "./social-icons.css";

function SocialIcons() {
  return (
    <div className="social-icons">
      <div className="social-icon icon-inst">
        <InstagramIcon titleAccess="instagram" />
      </div>

      <a
        href="https://linkedin.com/in/john-almazan/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-icon icon-linked">
          <LinkedInIcon titleAccess="linkedin" />
        </div>
      </a>

      <a
        href="https://github.com/almazankaze"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="social-icon icon-git">
          <GitHubIcon titleAccess="github" />
        </div>
      </a>

      <div className="social-icon icon-you">
        <YouTubeIcon titleAccess="youtube" />
      </div>
    </div>
  );
}

export default SocialIcons;
