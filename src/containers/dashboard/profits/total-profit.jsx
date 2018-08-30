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

class TotalProfit extends React.Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    }
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }

  render() {
    const { classes } = this.props;

    return (
      <Section className={classes.section}>
        <h3>Total Profit</h3>
        <div style={{ height: `${this.state.height - 400}px`, width: '100%' }}>
          <SimpleLineChart />
        </div>
      </Section>
    );
  }
}

export default withStyles(styles)(TotalProfit);
