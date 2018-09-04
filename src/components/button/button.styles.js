const styles = theme => ({
  root: {
    fontSize: 12,
    height: 40,
  },
  label: {
    minHeight: 24,
  },
  primary: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    '&:hover': {
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.common.white,
    },
  },
  secondary: {
    backgroundColor: 'inherit',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.secondary,
    },
  },
  text: {
    backgroundColor: 'inherit',
    color: theme.palette.secondary.blue,
    '&:hover': {
      color: theme.palette.secondary.blue,
    },
  },
  inverse: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.secondary.blue,
    boxShadow: 'none',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: theme.palette.secondary.blue,
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  logoButton: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-evenly',
  },
  logoButtonText: {
    marginTop: 5,
  },
  tooltip: {
    fontSize: 12,
  },
  icon: {
    marginRight: 10,
  },
});

export default styles;