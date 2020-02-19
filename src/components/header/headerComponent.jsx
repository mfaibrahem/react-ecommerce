import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg.svg';
import './header.scss';

const Header = props => {
  const { location } = props;
  return (
    <div className="header">
      <div className="mfaContainer">
        <div className="headerWrapper">
          <Link className="logoLink" to="/">
            <Logo className="logo" />
          </Link>

          <div className="options">
            <Link
              className={`option ${
                location.pathname === '/shop' ? 'active' : ''
              }`}
              to="shop"
            >
              SHOP
            </Link>
            <Link className="option" to="/contact">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
