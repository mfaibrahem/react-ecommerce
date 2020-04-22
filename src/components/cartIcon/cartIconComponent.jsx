import './cartIcon.scss';

import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selector';
import { ReactComponent as ShoppingIcon } from '../../assets/11.2 shopping-bag.svg';

const CartIcon = ({ itemsInCart, toggleCartHidden }) => {
	return (
		<div className="cartIcon option" onClick={toggleCartHidden}>
			<ShoppingIcon className="shoppingIcon" />
			<span className="itemCount">{itemsInCart}</span>
		</div>
	);
};

// const mapStateToProps = ({ cartList: { cartItems } }) => ({
// 	itemsInCart: cartItems.reduce(
// 		(accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
// 		0
// 	)
// });
const mapStateToProps = state => ({
	itemsInCart: selectCartItemsCount(state)
});

export default connect(mapStateToProps, { toggleCartHidden })(CartIcon);
