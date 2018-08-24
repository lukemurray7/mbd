import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppBar from '../../components/app-bar/app-bar';

import Routes from '../../Routes';

class App extends Component {
 render() {
  return (
   <div>
    <AppBar />
      <Routes />
   </div>
  );
 }
}


export default App;
