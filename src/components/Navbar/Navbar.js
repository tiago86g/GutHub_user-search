import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
const arrow = <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 20" width="24">
                <path fill="rgb(0, 254, 162)" d="M12.99,4H3.41406L5.69673,1.71734A.9999.9999,0,1,0,4.28266.30327L.30327,4.29266a.99965.99965,0,0,0,0,1.41468L4.28266,9.69673A.9999.9999,0,1,0,5.69673,8.28266L3.41406,6H12.99a1,1,0,1,0,0-2Z" />
              </svg>

  return (
    <nav className="Navbar">
      <ul className="Navbar_list">
        <li className="Navbar_item">
          <Link className="Navbar_link_left" to="/">
          {arrow}
          </Link>
        </li>
        <li className="Navbar_item">
          <Link className="Navbar_link_right" to="/About">
            <h1 className="Navbar_h1">about</h1>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
