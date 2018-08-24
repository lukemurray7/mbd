/* eslint-disable import/no-extraneous-dependencies */
import { applyMiddleware, compose, createStore } from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware, connectRouter, ConnectedRouter } from 'connected-react-router';
import { Route, Switch, Redirect } from 'react-router-dom';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './containers';
import reducer from './reducers/root-reducer';
import auth from './auth';

import './style.scss';

const history = createHashHistory();

const store = createStore(
  connectRouter(history)(reducer),
  compose(applyMiddleware(routerMiddleware(history), thunk)),
);

// const render = () => {
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Route component={auth(App)} />
      </div>
    </ConnectedRouter>
  </Provider>,
  root,
);

// render();

// // Hot reloading
// if (module.hot) {
//   // Reload components
//   module.hot.accept('./App', () => {
//     render();
//   });

//   // Reload reducers
//   module.hot.accept('./reducers/root-reducer', () => {
//     store.replaceReducer(connectRouter(history)(reducer));
//   });
// }
