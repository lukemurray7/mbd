import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import { Route, Switch } from 'react-router-dom';

import AppBar from '../../components/app-bar/app-bar';
import Drawer from '../../components/drawer/drawer';

import routes from '../../constants/routes';
import styles from './app-styles';
import NavbarContent from './nav-bar-content';

const getRoutes = () =>
  routes.map(route => <Route key={route.url} exact path={route.url} component={route.component} />);

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      navOpen: window.innerWidth > 800,
    };
    this.handeNavOpen = this.handeNavOpen.bind(this);
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      navOpen: window.innerWidth > 800,
    });
  }

  handeNavOpen() {
    this.setState({
      navOpen: !this.state.navOpen,
    });
  }


  render() {
    const { classes } = this.props;
    const { navOpen } = this.state;

    return (
      <div className={classes.root}>
        <AppBar toggleNav={this.handeNavOpen} />
        <div className={classes.main}>
          <Drawer drawerContent={(<NavbarContent navOpen={navOpen} />)} open={navOpen} />
          <div className={classes.toolbar} />
          <div className={classNames(classes.content, classes.contentLeft, {
            [classes.contentShift]: navOpen,
            [classes.contentShiftLeft]: navOpen,
          })}
          >
            <div className={classes.pageContent}>
              <Switch>
                {getRoutes()}
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(App);
