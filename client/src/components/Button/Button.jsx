import React from 'react';

import './Button.css';

const Button = ({ children, light, ...otherProps }) => {
  return (
    <button
      className={`btn ${light ? 'btn-light' : 'btn-dark'}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default Button;
