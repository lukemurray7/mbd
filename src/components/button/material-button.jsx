import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';

import styles from './button.styles';

const MaterialButton = (props) => {
  const {
    type,
    classes,
    icon,
    overrideClasses,
    text,
    tooltipText,
    variant,
    ...buttonProps
  } = props;

  const button = (
    <Button
      className={classnames(classes.root, classes[type])}
      variant={type === 'secondary' ? null : variant}
      classes={{ label: classes.label, ...overrideClasses }}
      {...buttonProps}
    >
      {icon && <Icon className={classes.icon}>{icon}</Icon>}
      {text}
    </Button>
  );

  return button;
};

MaterialButton.propTypes = {
  type: PropTypes.oneOf(['primary', 'secondary', 'inverse', 'text']),
  /** <a href="https://material.io/tools/icons" target="_blank">Material Icon name</a> */
  icon: PropTypes.string,
  overrideClasses: PropTypes.shape(),
  text: PropTypes.node,
  tooltipText: PropTypes.string,
  variant: PropTypes.string,
};

MaterialButton.defaultProps = {
  type: 'primary',
  icon: '',
  overrideClasses: {},
  text: '',
  tooltipText: '',
  variant: 'raised',
};

export default withStyles(styles)(MaterialButton);