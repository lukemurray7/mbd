const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: 220,
  },
  toolbar: {
    minHeight: 50,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: 220,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: 50,
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing.unit * 9,
    // },
  },
});

export default styles;
