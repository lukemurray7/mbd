import styled from 'styled-components';
import img from '../../assets/images/bg-01.jpg';

const LoginPageContainer = styled.div`
  background-image: url(${img});
  padding-top: 50px;
  height: 100vh
`;

const LoginForm = styled.div`
  background-color: white;
  height: 550px;
  width: 350px;
  margin: auto;
  box-shadow: 0 5px 10px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

const TextInputs = styled.div`
  margin: 0 auto;
  width: 80%;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;


const Title = styled.h4`
  margin: 0;
  padding: 0;
  padding-top: 20px;
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
  font-family: Poppins-bold;
`;

const SimpleText = styled.p`
  font-size: 12px;
  text-align: center;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: space-around;
`;

export {
  LoginPageContainer,
  LoginForm,
  Title,
  TextInputs,
  SimpleText,
  SocialButtons,
};
