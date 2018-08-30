import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Section from '../../../components/section/section';
import SimpleLineChart from '../../../components/line-chart/line-chart';

const styles = () => ({
  test: {
    width: '100%',
    height: '100%',
  },
  chart: {
    height: '500px',
    width: '100%',
  },
});

const TotalProfit = ({ classes }) =>
  (
    <Section className={classes.section}>
      <h3>Total Profit</h3>
      <div className={classes.chart}>
        <div className={classes.test}>
          <SimpleLineChart />
        </div>
      </div>
    </Section>
  );

export default withStyles(styles)(TotalProfit);
