import React, { Component } from 'react';

import HomePage from './pages/homepage/homepageComponent';

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <i className="fontello icon-home"></i>
        <HomePage />
      </>
    );
  }
}

export default App;
