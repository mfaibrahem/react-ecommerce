import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/header/headerComponent';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shopPage';
import signinSignup from './pages/signinSignup/signinSignupPage';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  state = {
    currentUser: null
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        // checks if the user updates thes snapshot
        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
        });
      }

      // if the user logs out
      else {
        this.setState({
          currentUser: userAuth
        });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          {!this.state.currentUser && (
            <Route exact path="/signin" component={signinSignup} />
          )}
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
