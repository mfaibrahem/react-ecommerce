import './collectionItem.scss';

import React from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart.actions';
import CustomButton from '../common/customButton/customButtonComponent';

const CollectionItem = ({ item, addItem }) => {
  const { name, imageUrl, price } = item;
  return (
    <div className="collectionItem">
      <div className="imgDiv">
        <img src={imageUrl} alt="img" />
        <CustomButton onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      </div>
      <div className="itemData">
        <p className="itemName">{name}</p>
        <p className="itemPrice">{price}$</p>
      </div>
    </div>
  );
};

// const mapDispatchToProps = dispatch => ({
//   addItem: item => dispatch(addItem(item))
// });

export default connect(null, { addItem })(CollectionItem);
