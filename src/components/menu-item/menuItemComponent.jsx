import React from 'react';
import './menuItem.scss';

const MenuItem = ({ item }) => {
  return (
    <>
      <div className={`menuItem ${item.size === 'large' ? 'large' : ''}`}>
        <div
          className="overlayDiv"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>
        <div className="content">
          <h3 className="title">{item.title}</h3>
          <p className="subtitle">Shop now</p>
        </div>
      </div>
    </>
  );
};

export default MenuItem;
