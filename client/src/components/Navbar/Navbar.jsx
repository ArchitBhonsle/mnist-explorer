import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar'>
      <motion.h2
        className='logo'
        drag
        dragElastic={0.1}
        dragConstraints={{
          top    : 0,
          left   : 0,
          right  : 0,
          bottom : 0
        }}
      >
        MNIST Explorer
      </motion.h2>
      <nav>
        <ul className='nav-links'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/visualize'>Visualize</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
