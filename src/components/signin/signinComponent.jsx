import React, { Component } from 'react';

import './signin.scss';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import FormInput from '../common/formInput/formInputComponent';
import CustomButton from '../../components/common/customButton/customButtonComponent';
import {
  auth,
  signInWithGoogle,
  signInWithFacebook
} from '../../firebase/firebase.utils';

class Signin extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = async e => {
    e.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      // if this succeeds => clear the form
      this.setState({
        email: '',
        password: ''
      });
    } catch (error) {
      console.error(error);
    }

    this.setState({
      email: '',
      password: ''
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="signinWrapper">
        <div className="logoImg">
          <Logo />
        </div>
        <h2>I already have account</h2>
        <p>Sign in with you email and password</p>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            value={this.state.email}
            id="emial"
            autoComplete="on"
            required
            handleChange={this.handleChange}
            label="Enter your email..."
          />
          <FormInput
            type="password"
            name="password"
            value={this.state.password}
            id="password"
            autoComplete="on"
            required
            handleChange={this.handleChange}
            label="Enter your password..."
          />
          <div className="buttonsDiv">
            <CustomButton type="submit">
              <span>
                <i className="icon-user-o"></i>
                Log in
              </span>
            </CustomButton>
            <CustomButton btnColor="googleBtn" onClick={signInWithGoogle}>
              <span>
                <i className="icon-google-1"></i>
                Log in with google
              </span>
            </CustomButton>
            <CustomButton btnColor="facebookBtn" onClick={signInWithFacebook}>
              <span>
                <i className="icon-facebook-official"></i>
                Log in with facebook
              </span>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;
