import React from 'react';
import { connect } from 'react-redux';
import fetchData from '../actions';
import { signOut } from '../actions/authentication';
// import addRecipe from '../../actions/add-recipe';

const Home = ({ data, fetchBets, logout }) => {
  if (!data) {
    fetchBets();
  }
  return (
    <div>
      <h2>Home Page</h2>
      <button onClick={logout}>log out</button>
    </div>
  );
};


// import RecipeEditor from './recipe-editor';


const mapStateToProps = ({ data }) => ({
  data,
});

const mapDispatchToProps = dispatch => ({
  fetchBets: () => dispatch(fetchData()),
  logout: () => dispatch(signOut()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
