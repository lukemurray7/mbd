import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Typography } from '@material-ui/core';

const styles = () => ({
  root: {
    fontSize: 20,
    marginTop: 0,
  },
});

const SectionHeader = ({ classes, title }) => (
  <Typography className={classes.root}>{title}</Typography>
);

SectionHeader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(SectionHeader);
