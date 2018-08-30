import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
  List,
  IconButton,
  Icon,
  Divider,
} from '@material-ui/core';
import LinkWrapper from '../../components/link/link';

import routes from '../../constants/routes';
import styles from './nav-bar-content-styles';

const sections = ['Dashboard', 'Bets', 'Bookmakers'];

const generateNavItem = ({ url, icon, name }, open, classes) =>
  (
    <React.Fragment>
      <LinkWrapper url={url}>
        <div className={classes.navItem}>
          <Icon className={classes.icon}>
            {icon}
          </Icon>
          <p className={classes.navItemName}>
            {open ? name : ''}
          </p>
        </div>
      </LinkWrapper>
    </React.Fragment>
  );

const generateNavSections = (open, classes) => {
  const items = section => routes.filter(route => route.belongs_to === section);
  return sections.map(section =>
    (
      <React.Fragment>
        <div>
          <p className={classes.sectionName}>{open ? section : ''}</p>
          {items(section).map(item => generateNavItem(item, open, classes))}
        </div>
        <Divider className={classes.divider} />
      </React.Fragment>
    ));
};


const NavBarContent = ({ navOpen, auth, classes }) =>
  (
    <List className={classes.navList}>
      {generateNavSections(navOpen, classes)}
    </List>
  );

export default withStyles(styles)(NavBarContent);
