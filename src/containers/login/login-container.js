import { connect } from 'react-redux';
import { push } from 'connected-react-router';
import LoginPage from './login';

import { signIn } from '../../actions/authentication';


const mapStateToProps = ({ auth }) => ({
  auth,
});

const mapDispatchToProps = dispatch => ({
  routeTo: path => dispatch(push(path)),
  signIn: () => dispatch(signIn()),
});


export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
