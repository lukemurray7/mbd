import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from './button';

const LinkButton = ({ to, ...buttonProps }) => (
  <Button {...buttonProps} component={Link} to={to} />
);

LinkButton.propTypes = {
  /** URL to navigate to */
  to: PropTypes.string.isRequired,
};

export default LinkButton;
