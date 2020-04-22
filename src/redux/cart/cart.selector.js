import { createSelector } from 'reselect';

const selectCart = state => state.cartList;

export const selectCartItems = createSelector(
	[selectCart],
	cart => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], items =>
	items.reduce(
		(accumlatedQuantity, cartItem) => accumlatedQuantity + cartItem.quantity,
		0
	)
);
