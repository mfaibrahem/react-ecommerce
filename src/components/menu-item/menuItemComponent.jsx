import React from 'react';
// import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import './menuItem.scss';

const MenuItem = ({ item, history, match }) => {
  return (
    <>
      <div
        className={`menuItem ${item.size === 'large' ? 'large' : ''}`}
        onClick={() => history.push(`${match.url}${item.linkUrl}`)}
      >
        {/* another solution
        <Link to={`${match.url}${item.linkUrl}`}>'go to my page'</Link> */}
        <div
          className="overlayDiv"
          style={{ backgroundImage: `url(${item.imageUrl})` }}
        ></div>
        <div className="content">
          <h3 className="title">{item.title}</h3>
          <p className="subtitle">Shop now</p>
        </div>
      </div>
    </>
  );
};

export default withRouter(MenuItem);
