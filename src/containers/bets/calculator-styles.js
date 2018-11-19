const styles = () => ({
  mainCalc: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  centre: {
    maxWidth: 600,
  },
  title: {
    padding: 10,
    background: '#e8e8e8',
    textAlign: 'center',
    color: 'white',
    marginBottom: 15,
    borderRadius: 3,
  },
  calculator: {
    backgroundColor: '#f8f8f8',
    borderRadius: 5,
    border: '1px solid rgb(0, 0, 0, 0.3)',
    // padding: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  headerSelect: {
    width: '45%',
    display: 'flex',
    fontSize: 12,
  },
  calcHeader: {
    display: 'flex',
    justifyContent: 'space-around',
  },
  inputBox: {
    width: '40%',
  },
  fields: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
});

export default styles;
