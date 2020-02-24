import React from 'react';

import './customButton.scss';

const CustomButton = ({ children, btnColor, ...otherProps }) => {
  return (
    <button className={`customButton ${btnColor}`} {...otherProps}>
      {children}
    </button>
  );
};

export default CustomButton;
