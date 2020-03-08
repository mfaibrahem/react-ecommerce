import './cartIcon.scss';

import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';

const CartIcon = ({ itemsInCart, toggleCartHidden }) => (
  <div className="cartIcon option" onClick={toggleCartHidden}>
    <ShoppingIcon className="shoppingIcon" />
    <span className="itemCount">
      {itemsInCart.reduce((accumlator, currentValue) => {
        return accumlator + currentValue.quantity;
      }, 0)}
    </span>
  </div>
);

// const mapDispatchToProps = dispatch => ({
//   toggleCartHidden: () => dispatch(toggleCartHidden)
// });

const mapStateToProps = ({ cartList: { cartItems } }) => ({
  itemsInCart: cartItems
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
