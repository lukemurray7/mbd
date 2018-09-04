import PropTypes from 'prop-types';
import React from 'react';
import MaterialModal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  modal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  modalTitle: {
    marginBottom: 20,
    fontSize: 16,
    color: 'black',
  },
  modalContent: {
    width: '100%',
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[5],
    padding: theme.defaultPadding,
  },
});

const Modal = ({
  classes,
  title,
  children,
  open,
  ...modalProps
}) => (
  <MaterialModal {...modalProps} open={open}>
    <div className={classes.modal}>
      <div className={classes.modalContent}>
        <Typography className={classes.modalTitle} variant="display2">{title}</Typography>
        {children}
      </div>
    </div>
  </MaterialModal>
);

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  title: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
};

Modal.defaultProps = {
  title: '',
};

export default withStyles(styles)(Modal);
