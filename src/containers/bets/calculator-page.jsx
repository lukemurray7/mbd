import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Section from '../../components/section/section';
import HeaderSection from '../../components/section/header-section';
import SelectComponent from '../../components/select/select';
import MaterialTextField from '../../components/text-input/material-text-input';

import styles from './calculator-styles';

class CalculatorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      betType: 'normal',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      betType: event.target.value,
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <Section>
        <HeaderSection title="Calculator" />
        <div className={classes.calculator}>
          <div className={classes.calcHeader}>
            <SelectComponent
              value={this.state.betType}
              label="Bet Type"
              handleChange={this.handleChange}
              data={
                [
                  {
                    value: 'normal',
                    label: 'Normal',
                  },
                  {
                    value: 'Free Bet (SNR)',
                    label: 'Free Bet (SNR)',
                  },
                  {
                    value: 'Free Bet (SR)',
                    label: 'Free Bet (SR)',
                  },
                ]
              }
            />
          </div>


        </div>
      </Section>
    );
  }
}

export default withStyles(styles)(CalculatorPage);
