import React from 'react';
import PropTypes from 'prop-types';

import Menu from '@material-ui/core/Menu';

const MenuComponent = ({
  anchorEl,
  anchorOrigin,
  transformOrigin,
  menuContent,
  handleClose,
}) =>
  (
    <Menu
      id="menu-appbar"
      anchorEl={anchorEl}
      anchorOrigin={anchorOrigin}
      transformOrigin={transformOrigin}
      open={!!anchorEl}
      onClose={handleClose}
    >
      {menuContent}
    </Menu>
  );

MenuComponent.defaultProps = {
  anchorEl: null,
  anchorOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  transformOrigin: {
    vertical: 'top',
    horizontal: 'right',
  },
  menuContent: [],
};

MenuComponent.propTypes = {
  anchorEl: PropTypes.shape({}),
  menuContent: PropTypes.arrayOf(PropTypes.element),
  anchorOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
  transformOrigin: PropTypes.shape({
    vertical: PropTypes.string,
    horizontal: PropTypes.string,
  }),
  handleClose: PropTypes.func.isRequired,
};

export default MenuComponent;
