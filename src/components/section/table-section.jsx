import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';

import SectionHeader from './header-section';
import Section from './section';

const styles = () => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  headerControls: {
    display: 'flex',
  },
});

const TableSection = ({
  classes,
  title,
  headerButtons,
  headerControls,
  children,
}) => (
  <Section>
    <div className={classes.header}>
      <div>
        {headerButtons || <SectionHeader title={title} />}
      </div>
      <div className={classes.headerControls}>
        {headerControls}
      </div>
    </div>
    <div>
      {children}
    </div>
  </Section>
);

TableSection.defaultProps = {
  headerButtons: null,
  headerControls: [],
};

TableSection.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]).isRequired,
  headerButtons: PropTypes.element,
  headerControls: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
  title: PropTypes.string.isRequired,
};

export default withStyles(styles)(TableSection);
