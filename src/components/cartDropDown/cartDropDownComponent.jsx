import './cartDropDown.scss';

import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItems } from '../../redux/cart/cart.selector';
import CustomButton from '../common/customButton/customButtonComponent';
import CartItem from '../cart-item/cartItemComponent';

class cartDropDown extends React.Component {
	cartDropdownRef = React.createRef();

	componentDidMount() {
		window.addEventListener('mousedown', this.handleClickOutsideCartDropdown);
	}

	componentWillUnmount() {
		window.removeEventListener(
			'mousedown',
			this.handleClickOutsideCartDropdown
		);
	}

	handleClickOutsideCartDropdown = event => {
		if (!this.cartDropdownRef.current.contains(event.target))
			this.props.toggleCartHidden();
	};

	renderCartDropDown = () => {
		const { items } = this.props;
		if (items.length > 0) {
			return (
				<>
					<div className="cartItems">
						{items.map(item => (
							<CartItem key={item.id} item={item} />
						))}
					</div>
					<CustomButton>Go to checkout</CustomButton>
				</>
			);
		}
		return (
			<div className="cartItems">
				<p style={{ textAlign: 'center', fontWeight: 'bold' }}>
					Your Cart is empty
				</p>
			</div>
		);
	};

	render() {
		return (
			<div className="cartDropDown" ref={this.cartDropdownRef}>
				{this.renderCartDropDown()}
			</div>
		);
	}
}

const mapStateToProps = state => ({
	items: selectCartItems(state)
});
// const mapStateToProps = ({ cartList: { cartItems } }) => ({
// 	items: cartItems
// });

export default connect(mapStateToProps, { toggleCartHidden })(cartDropDown);
