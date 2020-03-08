import './cartDropDown.scss';

import React from 'react';
import { connect } from 'react-redux';
import CustomButton from '../common/customButton/customButtonComponent';
import CartItem from '../cart-item/cartItemComponent';

const cartDropDown = ({ items }) => (
  <div className="cartDropDown">
    <div className="cartItems">
      {items.map(item => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    <CustomButton>Go to checkout</CustomButton>
  </div>
);

const mapStateToProps = ({ cartList: { cartItems } }) => ({
  items: cartItems
});

export default connect(mapStateToProps)(cartDropDown);
