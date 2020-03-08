import './cartItem.scss';

import React from 'react';

const CartItem = ({ item: { imageUrl, price, name, quantity } }) => (
  <div className="cartItem">
    <img src={imageUrl} alt="item" />
    <div className="itemDetails">
      <span className="name">{name}</span>
      <span className="price">
        {quantity} x {price}EGP
      </span>
    </div>
  </div>
);

export default CartItem;
