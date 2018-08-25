import React from 'react';
import { connect } from 'react-redux';
import fetchData from '../actions';
import { signOut } from '../actions/authentication';
// import addRecipe from '../../actions/add-recipe';
import Section from '../components/section/section';

const Home = ({ data, fetchBets, logout }) => {
  if (!data) {
    fetchBets();
  }

  return (
    <Section>
      HELLO
    </Section>
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
