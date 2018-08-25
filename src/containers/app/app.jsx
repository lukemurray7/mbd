import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import AppBar from '../../components/app-bar/app-bar';
import Drawer from '../../components/drawer/drawer';

import Routes from '../../Routes';
import styles from './app-styles';

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

    const drawerContent = (
      <div style={{ width: 240 }}>
        1
        2
        3
      </div>
    );

    return (
      <div className={classes.root}>
        <AppBar toggleNav={this.handeNavOpen} />
        <div className={classes.main}>
          <Drawer drawerContent={drawerContent} open={navOpen} />
          <div className={classes.toolbar} />
          <div className={classNames(classes.content, classes.contentLeft, {
            [classes.contentShift]: navOpen,
            [classes.contentShiftLeft]: navOpen,
          })}
          >
            <div className={classes.pageContent}>
              <Routes />
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default withStyles(styles)(App);
