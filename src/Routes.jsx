import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { TotalProfit, BetBreakdown } from './containers';

const Routes = () =>
  (
    <Switch>
      <Route exact path="/" component={TotalProfit} />
      <Route exact path="/bet-history" component={BetBreakdown} />
    </Switch>
  );

export default Routes;
