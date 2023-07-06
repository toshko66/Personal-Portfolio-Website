import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

import "../css/SocialIcons.css";

const SocialIcons = () => {
  return (
    <div className="social-icons">
      <a href="https://www.facebook.com/profile.php?id=100002763994047" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a href="https://www.instagram.com/velichkov.todor/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://www.linkedin.com/in/todor-velichkov-26037b255" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="mailto:toshko0926@gmail.com">
        <FontAwesomeIcon icon={faEnvelope} />
      </a>
    </div>
  );
};

export default SocialIcons;
