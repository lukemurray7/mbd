import styled, { css } from 'styled-components';

const Button = styled.button`
  font-size: 15px;
  border: 0;
  margin: 0;
  padding: 6px 0px 6px 0px;
  border-radius: 20px;
  font-family: Poppins-Medium;
  cursor: pointer;
  margin-bottom: 30px;

  ${props => props.primary && css`
      background: linear-gradient(#65A1E6, #C92ADE);
      color: white;
      &:hover {
        background: #a41cb6;
      }
    `}

  ${props => props.googleButton && css`
      background: #db3236;
      color: white;
      &:hover {
        background: #b72023;
      }
    `}
  ${props => props.facebookButton && css`
      background: #3B5998;
      color: white;
      &:hover {
        background: #4D0F49;
      }
    `}

  ${props => props.twitterButton && css`
      background: #1dcaff;
      color: white;
      &:hover {
        background: #00ade3;
      }
    `}

  ${props => props.round && css`
      border-radius: 100%;
      width: 50px;
      height: 50px;
      &:focus {
        outline: 0;
      }
    `}
`;

const LogoAndText = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const Logo = styled.span`
`;

const Text = styled.span`

`;


export { Button, LogoAndText, Logo, Text };
