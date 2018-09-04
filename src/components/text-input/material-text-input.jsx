import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import Icon from '@material-ui/core/Icon';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit,
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
      onChange={event => props.onChange(event.target.value)}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Icon>
              search
            </Icon>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default withStyles(styles)(MaterialTextField);
