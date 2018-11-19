import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import Section from '../../components/section/section';
import SelectComponent from '../../components/select/select';
import MaterialTextField from '../../components/text-input/material-text-input';
import MaterialButton from '../../components/button/material-button';
import CalculatorResults from './calculate-results';
import validateRequest from '../../helpers/validate-request';

import calculateValues from '../../helpers/calculate-stake';

import styles from './calculator-styles';

import { MODE_SELECT_DATA, BET_TYPE_SELECT_DATA } from './constants/select-data';

class CalculatorPage extends React.Component {
  constructor() {
    super();
    this.state = {
      betType: 'normal',
      mode: 'simple',
      backStake: '',
      backOdds: '',
      layOdds: '',
      commission: '2',
      results: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.betTypeChange = this.betTypeChange.bind(this);
    this.modeChange = this.modeChange.bind(this);
    this.calculate = this.calculate.bind(this);
  }


  setErrors() {
  }

  handleChange(value, key) {
    this.setState({
      [key]: value,
    }, () => {
      if (validateRequest({ ...this.state })) {
        this.calculate();
      } else {
        this.setState({
          results: null,
        });
      }
    });
  }

  calculate() {
    if (validateRequest({ ...this.state })) {
      const results = calculateValues({ ...this.state });
      this.setState({
        results,
      });
    } else {
      this.setErrors();
    }
  }


  betTypeChange(event) {
    this.handleChange(event.target.value, 'betType');
  }

  modeChange(event) {
    this.handleChange(event.target.value, 'mode');
  }


  render() {
    const { classes } = this.props;
    return (
      <Section>
        {/* <HeaderSection title="Calculator" /> */}
        <div className={classes.mainCalc}>
          <div className={classes.centre}>
            <div className={classes.calculator}>
              <div className={classes.title}>
                Calculator
              </div>
              <div className={classes.fields}>
                <div className={classes.inputBox}>
                  <SelectComponent
                    value={this.state.betType}
                    handleChange={this.betTypeChange}
                    data={BET_TYPE_SELECT_DATA}
                    label="Bet Type"
                  />
                </div>
                <div className={classes.inputBox}>
                  <SelectComponent
                    value={this.state.mode}
                    handleChange={this.modeChange}
                    data={MODE_SELECT_DATA}
                    label="Mode"
                  />
                </div>
                <div className={classes.inputBox}>
                  <MaterialTextField
                    label="Back Stake"
                    position="start"
                    inputAdorn
                    adornText="£"
                    value={this.state.backStake}
                    onChange={value => this.handleChange(value, 'backStake')}
                  />
                </div>
                <div className={classes.inputBox}>
                  <MaterialTextField
                    label="Back Odds"
                    value={this.state.backOdds}
                    onChange={value => this.handleChange(value, 'backOdds')}
                  />
                </div>
                <div className={classes.inputBox}>
                  <MaterialTextField
                    label="Lay Odds"
                    value={this.state.layOdds}
                    onChange={value => this.handleChange(value, 'layOdds')}
                  />
                </div>
                <div className={classes.inputBox}>
                  <MaterialTextField
                    label="Commision"
                    position="end"
                    inputAdorn
                    adornText="%"
                    value={this.state.commission}
                    onChange={value => this.handleChange(value, 'commission')}
                  />
                </div>
              </div>
              <MaterialButton
                type="primary"
                text="Calculate"
                onClick={this.calculate}
              />
              {this.state.results && (
                <CalculatorResults results={this.state.results} />
              )}
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default withStyles(styles)(CalculatorPage);
