import React from 'react';

import './Navbar.css';

const Navbar = () => {
  return (
    <header class='navbar'>
      <h2 class='logo'>MNIST Explorer</h2>
      <nav>
        <ul class='nav-links'>
          <li>
            <h3>Home</h3>
          </li>
          <li>
            <h3>Visualize</h3>
          </li>
          <li>
            <h3>About</h3>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
