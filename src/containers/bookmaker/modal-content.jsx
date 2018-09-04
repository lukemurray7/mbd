import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  main: {
    width: 500,
  },
});

const AddBookmakerContent = ({ classes }) => {
  return (
    <div className={classes.main}>
      HELLO
    </div>
  );
};

export default withStyles(styles)(AddBookmakerContent);
