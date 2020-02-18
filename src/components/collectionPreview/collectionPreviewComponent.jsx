import React from 'react';

import './collectionPreview.scss';
import CollectionItem from '../collectionItem/collectionItemComponent';

const CollectionPreview = ({ title, items }) => {
  return (
    <div className="collectionPreivew">
      <h1 className="title">{title}</h1>
      <div className="preview">
        {items
          .filter((item, inx) => inx < 4)
          .map(({ id, ...otherItemProps }) => (
            <CollectionItem key={id} {...otherItemProps} />
          ))}
      </div>
    </div>
  );
};

export default CollectionPreview;
