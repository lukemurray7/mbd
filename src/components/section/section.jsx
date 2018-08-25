import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';

const styles = () => ({
  root: {
    backgroundColor: 'white',
    border: '1px solid #e8e8e8',
    padding: 24,
    marginBottom: 24,
    position: 'relative',
  },
});

const Section = ({ children, classes }) => (
  <section className={classes.root}>
    {children}
  </section>
);

Section.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

export default withStyles(styles)(Section);