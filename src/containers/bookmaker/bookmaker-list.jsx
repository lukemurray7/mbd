import React from 'react';
import { withData, withStyles } from '@material-ui/core/styles';
import Section from '../../components/section/section';
import Table from '../../components/table/table';
import TableSection from '../../components/section/table-section';
import SectionHeader from '../../components/section/header-section';
import DataFilter from '../../components/data-filter/data-filter';


import BOOKMAKER_TABLE from './constants/table-fields';

const styles = () => ({
  createButton: {
    marginLeft: 30,
    display: 'inline-block',
    verticalAlign: 'top',
  },
  searchInput: {
    display: 'inline-block',
  },
});


const fakeData = [
  {
    bookmaker: 'Betfred',
    deposits: 400,
    withdrawals: 150,
    bets: 4,
  },
  {
    bookmaker: 'Bet365',
    deposits: 800,
    withdrawals: 450,
    bets: 13,
  },
];

class BookmakersList extends React.Component {
  constructor() {
    super();
    this.state = {
      filteredData: null,
    };
    this.onDataFilter = this.onDataFilter.bind(this);
  }

  onDataFilter(filteredData) {
    this.setState({
      filteredData,
    });
  }

  renderRightHeaderContent() {
    const {
      classes,
    } = this.props;

    return [
      (
        <div key="filter" className={classes.searchInput}>
          <DataFilter data={fakeData} onChange={this.onDataFilter} />
        </div>
      ),
    ];
  }

  render() {
    return (
      <TableSection
        title="Bookmakers"
        headerControls={this.renderRightHeaderContent()}
      >
        <Table
          columns={BOOKMAKER_TABLE}
          data={this.state.filteredData || []}
          rowKey="bookmaker"
        />
      </TableSection>
    );
  }
}

export default withStyles(styles)(BookmakersList);
