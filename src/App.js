import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepageComponent';
import ShopPage from './pages/shop/shoppage';
import Header from './components/header/headerComponent';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <Switch>
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
