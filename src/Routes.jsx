import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, About, LoginPage } from './containers';
import requireAuth from './require-auth';

const Routes = () => (
  <Switch>
    <Route exact path="/" component={LoginPage} />
    <Route path="/home" component={requireAuth(Home)} />
    <Route path="/about" component={About} />
  </Switch>
);

export default Routes;
