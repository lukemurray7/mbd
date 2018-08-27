import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {
  Hidden,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  MenuItem,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuComponent from '../menu/menu-component';
import styles from './app-bar-styles';

class AppBarComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      anchorEl: null,
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const { classes, toggleNav } = this.props;

    const menuContent = ([
      <MenuItem key="profile" onClick={this.handleClose}>Profile</MenuItem>,
      <MenuItem key="account" onClick={this.handleClose}>My account</MenuItem>,
    ]);

    return (
      <AppBar position="absolute" className={classes.main}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => toggleNav()}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Matched Betting Dashboard
          </Typography>
          <div className={classes.buttons}>
            <Hidden only={['sm', 'xs']}>
              <Button color="inherit">Info</Button>
            </Hidden>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={this.handleMenu}
            >
              <AccountCircle />
            </IconButton>
          </div>
          <MenuComponent
            anchorEl={this.state.anchorEl}
            menuContent={menuContent}
            handleClose={this.handleClose}
          />
        </Toolbar>
      </AppBar>
    );
  }
}


AppBarComponent.defaultProps = {};

AppBarComponent.propTypes = {};


export default withStyles(styles)(AppBarComponent);
