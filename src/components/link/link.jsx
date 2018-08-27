import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

const styles = () => ({
  main: {
    textDecoration: 'none',
    color: 'inherit',
  },
});

const LinkWrapper = ({ children, url, classes }) =>
  (
    <Link className={classes.main} to={url}>
      {children}
    </Link>
  );

export default withStyles(styles)(LinkWrapper);
