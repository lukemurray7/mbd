import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

import { LoginPage, InfoPage } from './containers';
import { fetchUser } from './actions/authentication';

const isAllowed = (path) => {
  switch (path) {
    case '/info': {
      return true;
    }
    case '/login': {
      return true;
    }
    default: {
      return false;
    }
  }
};

export default (ComposedComponent) => {
  class Authentication extends React.Component {
    componentDidMount() {
      if (!this.props.authenticated) {
        this.props.fetchUser();
      }
    }

    render() {
      if (!this.props.authenticated && !isAllowed(this.props.location.pathname)) {
        return <Redirect to="/login" />;
      }
      if (this.props.authenticated && this.props.location.pathname === '/login') {
        return <Redirect to="/" />;
      }

      return (
        <Switch>
          <Route path="/login" component={LoginPage} />
          <Route path="/info" component={InfoPage} />
          <Route component={ComposedComponent} />
        </Switch>
      );
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.auth,
  });

  const mapDispatchToProps = dispatch => ({
    routeTo: path => dispatch(push(path)),
    fetchUser: () => dispatch(fetchUser()),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
};
