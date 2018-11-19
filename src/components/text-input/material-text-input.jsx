import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
    width: '90%',
  },
});

const MaterialTextField = (props) => {
  const { classes } = props;
  return (
    <TextField
      className={classes.margin}
      id="material-textfield"
      label={props.label}
      value={props.value}
      type={props.type}
      placeholder={props.placeholder}
      onChange={event => props.onChange(event.target.value)}
      InputProps={props.inputAdorn && {
        startAdornment: props.position === 'start' && (
          <InputAdornment position="start">
            {props.adornText}
          </InputAdornment>
        ),
        endAdornment: props.position === 'end' && (
          <InputAdornment position="end">
            {props.adornText}
          </InputAdornment>
        ),
      }}
    />
  );
};

export default withStyles(styles)(MaterialTextField);
