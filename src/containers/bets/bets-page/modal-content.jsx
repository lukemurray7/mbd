import React from 'react';
import { withStyles } from '@material-ui/core/styles';

import MaterialTextInput from '../../../components/text-input/material-text-input';
import ButtonGroup from '../../../components/button-group/button-group';

const styles = () => ({
  main: {
    width: '100%',
  },
  input: {
    width: 253,
  },
  inputs: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    marginBottom: 40,
  },
  buttons: {
    paddingBottom: 20,
  },
});

const getWidth = (width) => {
  switch (true) {
    case (width > 900): {
      return width * 0.6;
    }
    case (width >= 500 && width <= 900): {
      return width * 0.7;
    }
    case (width < 500): {
      return width * 0.85;
    }
    default: {
      return width;
    }
  }
};

class AddBetsContent extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      deposits: '0',
      withdrawals: '0',
      currentBalance: '0',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  getButtons() {
    return [
      {
        type: 'secondary',
        onClick: () => this.props.onClose(),
        text: 'Cancel',
      },
      {
        type: 'primary',
        onClick: () => this.onSave(),
        text: 'Save',
      },
    ];
  }

  updateWindowDimensions() {
    this.setState({
      width: getWidth(window.innerWidth),
    });
  }

  handleChange(value, key) {
    this.setState({
      [key]: value,
    });
  }


  render() {
    const { classes } = this.props;
    return (
      <div className={classes.main} style={{ width: `${this.state.width}px` }}>
        <div className={classes.inputs}>
          <div className={classes.input}>
            <MaterialTextInput
              value={this.state.name}
              labeAddBetsContent              placeholder="Type name..."
              onChange={value => this.handleChange(value, 'name')}
            />
          </div>
          <div className={classes.input}>
            <MaterialTextInput
              value={this.state.deposits}
              label="Withdrawals"
              type="number"
              placeholder="Enter deposits amount"
              onChange={value => this.handleChange(value, 'deposits')}
            />
          </div>
          <div className={classes.input}>
            <MaterialTextInput
              value={this.state.currentBalance}
              label="Current Balance"
              type="number"
              placeholder="Enter current balance"
              onChange={value => this.handleChange(value, 'currentBalance')}
            />
          </div>
          <div className={classes.input}>
            <MaterialTextInput
              value={this.state.withdrawals}
              type="number"
              label="Deposits"
              placeholder="Enter withdrawals amount"
              onChange={value => this.handleChange(value, 'withdrawals')}
            />
          </div>
        </div>
        <div className={classes.buttons}>
          <ButtonGroup
            buttonConfig={this.getButtons()}
            classNames={['right']}
          />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AddBetsContent);
