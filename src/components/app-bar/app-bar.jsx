import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './app-bar-styles';

const AppBarComponent = ({ classes }) => {
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            MBD
          </Typography>
          <Button color="inherit">What is Matched Betting?</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};


AppBarComponent.defaultProps = {};

AppBarComponent.propTypes = {};


export default withStyles(styles)(AppBarComponent);
