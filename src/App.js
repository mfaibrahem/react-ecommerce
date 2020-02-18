import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepageComponent';

const HatsPage = props => {
  return (
    <div>
      <h1>Hats page</h1>
    </div>
  );
};
const MenPage = () => (
  <div>
    <h1>Men page</h1>
  </div>
);

class App extends Component {
  state = {};
  render() {
    return (
      <>
        {/* <HomePage /> */}
        <Switch>
          <Route path="/hats/men" component={MenPage} />
          <Route path="/hats" component={HatsPage} />
          <Route path="/" component={HomePage} />
        </Switch>
      </>
    );
  }
}

export default App;
