import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithubAlt,
  faLinkedinIn,
  faBehance,
} from '@fortawesome/free-brands-svg-icons';
import {} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer>
      <div className="some">
        <a href="https://www.github.com/tiago86g">
          <FontAwesomeIcon icon={faGithubAlt} />
        </a>
        <a href="https://www.linkedin.com/in/tiago86g/">
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://www.behance.net/tiago86g">
          <FontAwesomeIcon icon={faBehance} />
        </a>
      </div>
    </footer>
  );
}
