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
    marginTop: 10,
    marginBottom: 10,
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
    marginBottom: 40,
  },
  sectionName: {
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 20,
    marginBottom: 100,
  },
  icon: {
    color: 'grey',
  },
});

export default styles;
