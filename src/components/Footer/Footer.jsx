import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import "./Footer.css";

//condition location

const Footer = () => {
  return (
    <div className="footer-main">
      <hr />
      <div className="footer-container"> 
        <div>
          Made with ❤️ by{" "}
          <a
            href="https://bhumikawebsite.netlify.app/"
            target="_blank"
            rel="noreferrer"
            className="not-link"
          >
            {" "}
            Bhumika Singh
          </a>
        </div>
        <div className="footer-links">
          <div>
            <a
             className="not-link"
              href="https://github.com/BhumikaSingh-27"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
          </div>
          <div>
            <a
            className="not-link"
              href="https://twitter.com/BhumikaSingh27"
              target="_blank"
              rel="noreferrer"
            >
              <TwitterIcon />
            </a>
          </div>
          <div>
            <a
             className="not-link"
              href="https://www.linkedin.com/in/bhumika-singh-594004184/"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div>&#169; 2023 | ShareMate</div>
      </div>
    </div>
  );
};

export default Footer;
