import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";

function SocialLinks() {
  return (
    <ul>
      <li>
        <a
          href="https://linkedin.com/in/john-almazan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon titleAccess="linkedin" className="social-icon" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/almazankaze"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <GitHubIcon titleAccess="github" className="social-icon" />
        </a>
      </li>
      <li>
        <a
          href="https://github.com/almazankaze"
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon"
        >
          <YouTubeIcon titleAccess="youtube" className="social-icon" />
        </a>
      </li>
    </ul>
  );
}

export default SocialLinks;
