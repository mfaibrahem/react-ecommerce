import React from 'react';

import './signinSignupPage.scss';
import Signin from '../../components/signin/signinComponent';
import Signup from '../../components/signup/signupComponent';

const SigninSignupPage = () => {
  return (
    <div className="signinSignupPage">
      <div className="mfaContainer">
        <div className="signinSignupWrapper">
          <Signin />
          <Signup />
        </div>
      </div>
    </div>
  );
};

export default SigninSignupPage;
