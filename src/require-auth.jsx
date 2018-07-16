import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

export default (ComposedComponent) => {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.routeTo('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.routeTo('/');
      }
    }

    render() {
      if (this.props.authenticated) {
        return <ComposedComponent {...this.props} />;
      }
      return null;
    }
  }

  const mapStateToProps = state => ({
    authenticated: state.auth,
  });

  const mapDispatchToProps = dispatch => ({
    routeTo: path => dispatch(push(path)),
  });

  return connect(mapStateToProps, mapDispatchToProps)(Authentication);
};
