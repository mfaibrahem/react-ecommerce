import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shoppage';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Switch>
          <Route path="/shop" component={ShopPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
