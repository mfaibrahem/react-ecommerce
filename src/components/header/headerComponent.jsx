import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

import { auth } from '../../firebase/firebase.utils';

const Header = ({ location, currentUser }) => {
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
