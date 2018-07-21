import React from 'react';
import {
  Button,
  LogoAndText,
  Logo,
  Text,
} from './button-styles';

const ButtonComponent = (props) => {
  const text = props.logo ? (
    <LogoAndText>
      <Logo className={props.logo} />
      <Text>{props.buttonText}</Text>
    </LogoAndText>
  ) : props.buttonText;
  return (
    <Button
      {...props}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
