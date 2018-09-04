import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core';

import MaterialTextInput from '../text-input/material-text-input';

const styles = () => ({
  root: {
    display: 'inline-block',
  },
});

class DataFilter extends Component {
  constructor() {
    super();
    this.state = {
      filterValue: '',
    };
    this.onFilterChange = this.onFilterChange.bind(this);
  }

  componentDidMount() {
    this.applyFilter(this.state.filterValue);
  }

  componentDidUpdate(prevProps) {
    if (this.props.data !== prevProps.data) {
      this.applyFilter(this.state.filterValue);
    }
  }

  onFilterChange(filterValue) {
    this.setState({
      filterValue,
    });

    if (this.props.data) {
      this.applyFilter(filterValue);
    }
  }

  applyFilter(filterValue) {
    this.props.onChange(this.props.data ?
      this.props.filter(this.props.data, filterValue) :
      []);
  }

  render() {
    return (
      <div className={this.props.classes.root}>
        <MaterialTextInput
          placeholder="Search"
          value={this.state.filterValue}
          onChange={this.onFilterChange}
          fullWidth={false}
          prefix={<Icon>search</Icon>}
          {...this.props.inputProps}
        />
      </div>
    );
  }
}

DataFilter.defaultProps = {
  data: [],
  filter: (data, filter) => data.filter(item => Object.values(item)
    .some(value => `${value}`.toLowerCase().includes(filter.toLowerCase()))),
  onChange: () => { },
  inputProps: {},
};

DataFilter.propTypes = {
  data: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.shape()),
    PropTypes.arrayOf(PropTypes.string),
  ]),
  filter: PropTypes.func,
  onChange: PropTypes.func,
  inputProps: PropTypes.shape({}),
};

export default withStyles(styles)(DataFilter);
