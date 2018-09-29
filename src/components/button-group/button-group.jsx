import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { withStyles } from '@material-ui/core';

import Button from '../button/material-button';
import LinkButton from '../button/link-button';

const styles = theme => ({
  right: {
    justifyContent: 'flex-end',
    display: 'flex',
  },
  button: {
    display: 'inline-block',
    minWidth: 100,
    marginLeft: 0,
    marginRight: theme.defaultMargin / 2,
  },
  buttonRight: {
    marginLeft: theme.defaultMargin / 2,
    marginRight: 0,
  },
});

const getButtonType = (buttonType) => {
  switch (buttonType) {
    case 'link': {
      return LinkButton;
    }
    default: {
      return Button;
    }
  }
};

const rootClassnames = (classes, classNames) => classnames({
  [classes.right]: classNames.includes('right'),
});

const buttonClassnames = (classes, classNames) => classnames({
  [classes.button]: true,
  [classes.buttonRight]: classNames.includes('right'),
});

const ButtonGroup = ({ buttonConfig, classes, classNames }) => (
  <div className={rootClassnames(classes, classNames)}>
    {
      buttonConfig.map(({ buttonType, key, ...buttonProps }) => {
        const ButtonType = getButtonType(buttonType);
        return (
          <div key={key} className={buttonClassnames(classes, classNames)}>
            <ButtonType {...buttonProps} />
          </div>
        );
      })
    }
  </div>
);

ButtonGroup.defaultProps = {
  classNames: [],
};

ButtonGroup.propTypes = {
  buttonConfig: PropTypes.arrayOf(PropTypes.shape({
    buttonType: PropTypes.oneOf(['standard', 'link']),
    key: PropTypes.string.isRequired,
  })).isRequired,
  classNames: PropTypes.arrayOf(PropTypes.string),
};

export default withStyles(styles)(ButtonGroup);
