export default theme => ({
  overflowX: {
    overflowX: 'scroll',
    overflowY: 'hidden',
    '&::-webkit-scrollbar': {
      width: 5,
      height: 8,
    },
    '&::-webkit-scrollbar-thumb': {
      background: '#aaa',
      borderRadius: 5,
    },
  },
  heading: {
    fontSize: theme.typography.smallerFontSize,
    whiteSpace: 'nowrap',
  },
  body: {
    fontSize: theme.typography.fontSize,
    whiteSpace: 'nowrap',
  },
  row: {
    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },
  clickableRow: {
    '&:hover': {
      backgroundColor: theme.palette.background.default,
      cursor: 'pointer',
    },
  },
  checkboxCell: {
    width: 100,
  },
  disabled: {
    color: `${theme.palette.action.disabledBackground} !important`,
  },
  iconArea: {
    fontSize: 16,
    marginLeft: 6,
  },
  toolTipFont: {
    fontSize: 12,
    height: 74,
    borderRadius: 2,
    backgroundColor: '#7f7f7f',
  },
  tooltip: {
    display: 'inline-flex',
  },
});
