import React, { Component } from 'react';
import SHOP_DATA from './shop.data';

import './shopPage.scss';
import CollectionPreview from '../../components/collectionPreview/collectionPreviewComponent';

class ShopPage extends Component {
  state = {
    collections: SHOP_DATA
  };
  render() {
    const { collections } = this.state;
    return (
      <>
        <div className="shopPage">
          <div className="mfaContainer">
            <div className="collectionPreviewWrapper">
              {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
              ))}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default ShopPage;
