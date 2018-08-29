import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Section from '../../../components/section/section';
import SimpleLineChart from '../../../components/line-chart/line-chart';

const styles = () => ({
  chart: {
    width: '700px',
    height: '400px',
  },
});

const TotalProfit = ({ classes }) =>
  (
    <Section>
      <div className={classes.chart}>
        <SimpleLineChart />
      </div>
    </Section>
  );

export default withStyles(styles)(TotalProfit);
