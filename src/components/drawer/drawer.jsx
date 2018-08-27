import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';

import Drawer from '@material-ui/core/Drawer';
import styles from './drawer-styles';

const DrawerComponent = ({
  classes,
  drawerContent,
  open,
}) =>
  (
    <Drawer
      variant="permanent"
      classes={{
        paper: classNames(classes.drawerPaper, !open && classes.drawerPaperClose),
      }}
      open={open}
    >
      <div className={classes.toolbar} />
      {drawerContent}
    </Drawer>
  );

DrawerComponent.defaultProps = {
  drawerContent: null,
  open: true,
};

DrawerComponent.propTypes = {
  drawerContent: PropTypes.element,
  open: PropTypes.bool,
};

export default withStyles(styles)(DrawerComponent);
