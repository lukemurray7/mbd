const styles = () => ({
  navList: {
    paddingTop: 10,
    height: '100vh',
    backgroundColor: '#f8f8f8',
  },
  navItem: {
    margin: 'auto',
    paddingLeft: 12,
    display: 'flex',
    paddingTop: 20,
    paddingBottom: 20,
    fontFamily: 'Poppins-Medium',
    fontSize: 14,
    '&:hover': {
      backgroundColor: '#e8e8e8',
    },
  },
  navItemName: {
    margin: 0,
    marginLeft: 20,
  },
  divider: {
    marginBottom: 10,
  },
  sectionName: {
    fontFamily: 'Poppins-Regular',
    margin: 0,
    marginLeft: 12,
    color: 'grey',
    height: 12,
    marginBottom: 20,
  },
  icon: {
    color: 'grey',
  },
});

export default styles;
