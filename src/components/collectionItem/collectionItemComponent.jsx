import React from 'react';

import './collectionItem.scss';

const CollectionItem = ({ name, imageUrl, price }) => {
  return (
    <div className="collectionItem">
      <div className="imgDiv">
        <img src={imageUrl} alt="img" />
      </div>
      <div className="itemData">
        <p className="itemName">{name}</p>
        <p className="itemPrice">{price}$</p>
      </div>
    </div>
  );
};

export default CollectionItem;
