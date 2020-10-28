import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="Navbar">
      <ul className="Navbar_list">
        <li className="Navbar_item">
          <Link className="Navbar_link_left" to="/">
          <h1>&lt;</h1>
          </Link>
        </li>
        <li className="Navbar_item">
          <Link className="Navbar_link_right" to="/About">
            <h1>about</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
