import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import MaterialTable from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import TablePagination from '@material-ui/core/TablePagination';
import Tooltip from '@material-ui/core/Tooltip';

import styles from './table-styles';

class Table extends React.Component {
  constructor(props) {
    super(props);

    const sortKey = props.columns.find(column => column.sort) || {};

    this.state = {
      sortBy: sortKey.field || '',
      sortDirection: sortKey.sort || 'desc',
      data: props.data,
      currentPage: 0,
      rowsPerPage: props.defaultRowsPerPage,
    };

    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  componentWillMount() {
    this.setState({
      data: this.props.data && this.sortData(
        this.state.sortDirection,
        this.state.sortBy,
        this.props.data
      ),
    });
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      data: nextProps.data && this.sortData(
        this.state.sortDirection,
        this.state.sortBy,
        nextProps.data
      ),
    });
  }

  sortData(sortDirection, sortBy, data) {
    if (!this.props.columns.some(column => column.field === sortBy)) {
      return data;
    }

    return data.sort((a, b) => {
      const aValue = typeof a[sortBy] === 'string' ? a[sortBy].toLowerCase() : a[sortBy];
      const bValue = typeof b[sortBy] === 'string' ? b[sortBy].toLowerCase() : b[sortBy];
      if (bValue < aValue) {
        return sortDirection === 'desc' ? -1 : 1;
      }

      if (aValue < bValue) {
        return sortDirection === 'desc' ? 1 : -1;
      }

      return 0;
    });
  }

  handleSort(sortBy) {
    let sortDirection = 'desc';

    if (this.state.sortBy === sortBy && this.state.sortDirection === 'desc') {
      sortDirection = 'asc';
    }

    const data = this.sortData(sortDirection, sortBy, this.state.data);

    this.setState({ data, sortBy, sortDirection });
  }

  handleChangePage(event, currentPage) {
    this.setState({ currentPage });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ rowsPerPage: event.target.value });
  }

  render() {
    const {
      columns,
      classes,
      rowKey,
      onSelectAll,
      selected,
      onRowSelect,
      onRowClick,
      pagination,
    } = this.props;

    const {
      data,
      sortBy,
      sortDirection,
      currentPage,
      rowsPerPage,
    } = this.state;

    const isSelected = id => selected.indexOf(id) !== -1;

    const rowsSelected = selected && selected.length;

    const headerCheckbox = selected && (
      <TableCell className={classes.checkboxCell} padding="checkbox">
        {
          onSelectAll &&
          <Checkbox
            classes={{ disabled: classes.disabled }}
            indeterminate={rowsSelected > 0 && rowsSelected < data.length}
            checked={rowsSelected > 0 && rowsSelected === data.length}
            onChange={onSelectAll}
          />
        }
      </TableCell>
    );

    const generateTableCheckbox = (row) => {
      if (selected) {
        return (
          <TableCell padding="checkbox">
            <Checkbox
              classes={{ disabled: classes.disabled }}
              checked={isSelected(row[rowKey]) && !row.disabled}
              onChange={event => onRowSelect(event, row[rowKey])}
              disabled={row.disabled}
            />
          </TableCell>
        );
      }
      return null;
    };
    return (
      <Fragment>
        <div className={classes.overflowX}>
          <MaterialTable>
            <TableHead>
              <TableRow>
                {headerCheckbox}
                {
                  columns.map(column => (
                    <TableCell
                      key={column.field}
                      className={classes.heading}
                      sortDirection={sortBy === column.field ? sortDirection : false}
                    >
                      {!this.props.sortable && this.props.toolTip ? (
                        <div className={classes.tooltip}>
                          {column.label}
                          <Tooltip
                            title={this.props.toolTipData && this.props.toolTipData.length > 0
                              ? this.props.toolTipData
                              : ''}
                            placement="bottom"
                            onOpen={() => { this.props.onToolTipOpen(column.field); }}
                            classes={{ tooltip: classes.toolTipFont }}
                          >
                            <div>
                              <Icon
                                classes={{ root: classes.iconArea }}
                              >
                                info_outline
                              </Icon>
                            </div>
                          </Tooltip>
                        </div>
                      )
                        : null}
                      {this.props.sortable && !this.props.toolTip ? (
                        <TableSortLabel
                          active={sortBy === column.field}
                          direction={sortDirection}
                          onClick={() => this.handleSort(column.field)}
                        >
                          {column.label}
                        </TableSortLabel>
                      ) : null}
                      {!this.props.sortable && !this.props.toolTip ?
                        column.label
                        : null}
                    </TableCell>
                  ))
                }
              </TableRow>
            </TableHead>
            <TableBody>
              {
                (pagination ?
                  data.slice(currentPage * rowsPerPage, (currentPage * rowsPerPage) + rowsPerPage) :
                  data
                )
                  .map(row => (
                    <TableRow
                      className={onRowClick && !row.disabled ? classes.clickableRow : classes.row}
                      key={row[rowKey]}
                    >
                      {generateTableCheckbox(row)}
                      {
                        columns.map(column => (
                          <TableCell
                            onClick={onRowClick && !row.disabled
                              ? event => onRowClick(event, row)
                              : null}
                            key={column.field}
                            className={classes.body}
                            title={column.alt ? column.alt(row) : row[column.field]}
                          >
                            {column.format ? column.format(row) : row[column.field]}
                          </TableCell>
                        ))
                      }
                    </TableRow>
                  ))
              }
            </TableBody>
          </MaterialTable>
        </div>
        {pagination && <TablePagination
          component="div"
          count={data.length}
          rowsPerPage={rowsPerPage}
          page={currentPage}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />}
      </Fragment>
    );
  }
}

Table.defaultProps = {
  data: [],
  rowKey: 'id',
  onRowSelect: null,
  selected: null,
  sortable: true,
  onSelectAll: null,
  onRowClick: null,
  defaultRowsPerPage: 5,
  pagination: true,
  onToolTipOpen: () => { },
  toolTip: false,
  toolTipData: [],
};

Table.propTypes = {
  /** Column configurations */
  columns: PropTypes.arrayOf(PropTypes.shape({
    /** name of data field to display in the column  */
    field: PropTypes.string.isRequired,
    /** column header  */
    label: PropTypes.string.isRequired,
    /** only required on one column - sort by this column by default, in specified direction */
    sort: PropTypes.oneOf(['asc', 'desc']),
    /** format how the data is displayed in cells in this column  */
    format: PropTypes.func,
    /** generate alt text to display on cell hover - defaults to cell value */
    alt: PropTypes.func,
  })).isRequired,
  data: PropTypes.arrayOf(PropTypes.shape()),
  /** unique identifier for the row */
  rowKey: PropTypes.string,
  /** `rowKey`s of selected rows. If not passed, the table will not be selectable */
  selected: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])),
  sortable: PropTypes.bool,
  onRowSelect: PropTypes.func,
  /** Called when the select all checkbox changes. If not passed, the checkbox will not render. */
  onSelectAll: PropTypes.func,
  onRowClick: PropTypes.func,
  defaultRowsPerPage: PropTypes.number,
  pagination: PropTypes.bool,
  /** pass tooltip if want to use tool tip in table and make sure to false the sortable,
  there can't be both sortable and tooltip table for now  */
  toolTip: PropTypes.bool,
  /** will return the column field on which pointer is hovered. */
  onToolTipOpen: PropTypes.func,
  /** data which to be showed in tooltip, data must be whithin a component(div, text , etc). */
  toolTipData: PropTypes.arrayOf(PropTypes.object),
};

export default withStyles(styles)(Table);
