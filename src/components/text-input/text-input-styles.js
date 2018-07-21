import styled from 'styled-components';

const Input = styled.input`
  border: 0;
  outline: 0;
  padding-left: 23px;
  font-size: 14px;
  font-family: Poppins-Medium;
  width: 100%;
  height: 40px;

  &:focus {
    outline: 0;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  border-bottom: 2px solid #adadad;
  margin-bottom: 37px;
`;

const Label = styled.label`
  font-size: 12px;
  color: rgba(0, 0, 0, 0.6);
  line-height: 1.5;
`;

const LogoInput = styled.span`
  position: absolute;
  bottom: 14px;
  left: 2px;
  color: grey;
`;

export { Input, LogoInput, InputWrapper, Label };
