import React, { Component } from 'react';
import { connect } from 'react-redux';

import Routes from './Routes';

class App extends Component {
  render() {
    return (
      <div>
        Navbar
        <Routes />
      </div>
    );
  }
}


export default App;
