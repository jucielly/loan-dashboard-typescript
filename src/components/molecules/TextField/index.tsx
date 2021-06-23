import React from 'react';
import Input from '../../atoms/input';
import { Container } from './style';

interface TextFieldProps {
  label: string;
  name: string;
  inputRef: () => void;
  error: string;
  type: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  inputRef,
  error,
  type,
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Input name={name} ref={inputRef} type={type} />
      {error && <p>{error}</p>}
    </Container>
  );
};

export default TextField;
