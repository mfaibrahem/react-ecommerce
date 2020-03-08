import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, btnColor, inverted, ...otherProps }) => {
  return (
    <button
      className={`customButton ${btnColor} ${inverted ? 'inverted' : ''}`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
