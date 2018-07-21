import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextInput from '../../components/text-input/text-input';
import MBDLogo from '../../assets/images/test.png';
import Button from '../../components/button/button';
import {
  LoginPageContainer,
  LoginForm,
  TextInputs,
  SocialButtons,
  Title,
  SimpleText,
} from './login-page-styles';


class LoginPage extends Component {
  componentWillUpdate(nextProps) {
    if (nextProps.auth) {
      this.props.routeTo('/home');
    }
  }

  render() {
    return (
      <LoginPageContainer>
        <LoginForm>
          <Title>Login</Title>
          <TextInputs>
            <TextInput
              labelText="Email ID"
              logoInputText="far fa-user"
              overlay="Type your email ID"
            />
            <TextInput
              isPassword="password"
              overlay="Type your password"
              logoInputText="fas fa-lock"
              labelText="Password"
            />
            <Button
              primary
              buttonText="LOGIN"
              onClick={this.props.signIn}
            />
            <SimpleText>Or sign in with</SimpleText>
            <SocialButtons>
              <Button
                round
                googleButton
                logo="fab fa-google"
                onClick={this.props.signIn}
              />
              <Button
                round
                facebookButton
                logo="fab fa-facebook-f"
                onClick={this.props.signIn}
              />
              <Button
                round
                twitterButton
                logo="fab fa-twitter"
                onClick={this.props.signIn}
              />
            </SocialButtons>
          </TextInputs>
        </LoginForm>
      </LoginPageContainer>
    );
  }
}


export default LoginPage;
