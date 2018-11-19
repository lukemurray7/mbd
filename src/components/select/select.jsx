import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import styles from './select-styles';

class SelectComponent extends React.Component {
  constructor() {
    super();
    this.state = {

    };
  }
  render() {
    const {
      classes,
      data,
      label,
      handleChange,
      value
    } = this.props;

    const formatData = data.map(({ label, value }) => (
      <MenuItem value={value}>
        {label}
      </MenuItem>
    ));

    return (
      <FormControl className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
        >
          {formatData}
        </Select>
      </FormControl>
    );
  }
}

export default withStyles(styles)(SelectComponent);
