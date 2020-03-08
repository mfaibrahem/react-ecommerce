import './header.scss';
import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cartIcon/cartIconComponent';
import CartDropDown from '../cartDropDown/cartDropDownComponent';

const Header = ({ location, currentUser, hidden }) => {
  // const { location, currentUser } = props;

  const setActive = (currentClass, path) =>
    `${currentClass} ${location.pathname === path ? 'active' : ''}`;

  return (
    <div className="header">
      <div className="mfaContainer">
        <div className="headerWrapper">
          <Link className="logoLink" to="/">
            <Logo className="logo" />
          </Link>

          <div className="options">
            <Link className={setActive('option', '/')} to="/">
              Home
            </Link>
            <Link className={setActive('option', '/shop')} to="/shop">
              SHOP
            </Link>
            <Link className={setActive('option', '/contact')} to="/contact">
              CONTACT
            </Link>
            {currentUser ? (
              <div className="option" onClick={() => auth.signOut()}>
                Logout
              </div>
            ) : (
              <Link className={setActive('option', '/signin')} to="/signin">
                SIGNIN
              </Link>
            )}
            <CartIcon />
            {hidden ? null : <CartDropDown />}
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ user: { currentUser }, cartList: { hidden } }) => ({
  currentUser: currentUser,
  hidden: hidden
});

export default connect(mapStateToProps)(withRouter(Header));
