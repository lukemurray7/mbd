const styles = theme => ({
  toolbar: theme.mixins.toolbar,
  root: {
    flexGrow: 1,
  },
  main: {
    display: 'flex',
    overflow: 'hidden',
    position: 'relative',
    width: '100vw',
  },
  content: {
    width: 1,
    flexGrow: 1,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  pageContent: {
    'overflow-x': 'hidden',
    'overflow-y': 'scroll',
    flexShrink: 1,
    maxHeight: 'calc(100vh - 120px)',
    marginTop: 60,
    padding: 10,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  contentShiftLeft: {
    marginLeft: 0,
  },
});

export default styles;
