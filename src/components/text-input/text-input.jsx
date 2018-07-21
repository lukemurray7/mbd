import React from 'react';
import { Input, InputWrapper, Label, LogoInput } from './text-input-styles';

const TextInput = ({ overlay, isPassword, logoInputText, labelText }) => {
  const isLabel = labelText ? <Label>{labelText}</Label> : null;
  const logoInput = logoInputText ? <LogoInput className={logoInputText}/> : null;
  return (
    <InputWrapper>
      {isLabel}
      {logoInput}
      <Input type={isPassword} placeholder={overlay} />
    </InputWrapper>
  );
};

export default TextInput;
