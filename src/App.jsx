import React, { Component } from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { connect } from 'react-redux';
import { fetchUser } from './actions/authentication';

import Routes from './Routes';

class App extends Component {
  componentWillMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <ConnectedRouter history={this.props.history}>
        <Routes />
      </ConnectedRouter>
    );
  }
}


export default connect(null, { fetchUser })(App);
