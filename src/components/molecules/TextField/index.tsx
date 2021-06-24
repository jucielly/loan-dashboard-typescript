import React from 'react';
import Input from '../../atoms/Input';
import { Container } from './style';

interface TextFieldProps {
  label: string;
  name: string;
  inputRef: (ref: null) => void;
  error?: string;
  type: string;
  min: string;
  max: string;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  name,
  inputRef,
  error,
  type,
  min,
  max,
}) => {
  return (
    <Container>
      <label htmlFor={name}>{label}</label>
      <Input name={name} ref={inputRef} type={type} min={min} max={max} />
      {error && <small>{error}</small>}
    </Container>
  );
};

export default TextField;
