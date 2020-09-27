import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="icon-button" to="/">
            X
          </Link>
        </li>
        <li>
          <Link className="link icon-button" to="/About">
            O
          </Link>
        </li>
      </ul>
    </nav>
  );
}
