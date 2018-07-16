import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginPage extends Component {
  componentWillUpdate(nextProps) {
    console.log('?');
    if (nextProps.auth) {
      this.props.routeTo('/home');
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.props.signIn}>LOG IN</button>
      </div>
    );
  }
}


export default LoginPage;
