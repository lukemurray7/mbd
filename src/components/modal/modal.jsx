import PropTypes from 'prop-types';
import React from 'react';
import MaterialModal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  modal: {
    position: 'fixed',
    top: '35%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  modalTitle: {
    backgroundColor: '#4054B2',
    paddingBottom: 20,
    marginBottom: 20,
    fontSize: 20,
    color: 'white',
    padding: 20,
  },
  modalContent: {
    width: '100%',
    backgroundColor: 'white',
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
