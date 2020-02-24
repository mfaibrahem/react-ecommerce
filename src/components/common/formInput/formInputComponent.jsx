import React from 'react';

import './formInput.scss';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="formGroup">
      <input
        className="formInput"
        onChange={e => handleChange(e)}
        {...otherProps}
      />
      {label ? (
        <label
          className={`${
            otherProps.value.length ? 'shrink' : ''
          } formInputLabel`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;
