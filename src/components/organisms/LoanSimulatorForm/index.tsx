import React, { useState } from 'react';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import Button from '../../atoms/Button';
import TextField from '../../molecules/TextField';
import SimulationModal from '../SimulationModal';
import { Simulation } from '../../../types/simulation';

const StyledForm = styled.form`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 20px 0 10px 0;
`;

const LoanSimulatorForm = () => {
  const [open, setOpen] = useState(false);
  const [simulation, setSimulation] = useState<Simulation>();
  const { register, errors, handleSubmit, reset } = useForm<Simulation>();

  const onSubmit: SubmitHandler<Simulation> = (formValues) => {
    const loanValue = +formValues.loanValue;
    const monthlyInterest = +formValues.monthlyInterest;
    const numberOfInstallments = +formValues.numberOfInstallments;
    const interest = loanValue * (monthlyInterest / 100);
    const total = loanValue + interest;
    const installmentValue = total / numberOfInstallments;

    setSimulation({
      loanValue,
      monthlyInterest,
      numberOfInstallments,
      installmentValue,
    });
    setOpen(true);
    reset();
  };

  const handleCloseModal = () => {
    setOpen(false);
  };
  return (
    <>
      <SimulationModal
        open={open}
        onClose={handleCloseModal}
        simulation={simulation}
      />
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Valor do emprestimo"
          name="loanValue"
          inputRef={register({ required: 'Insira o valor' })}
          error={errors.loanValue?.message}
          type="number"
        />
        <TextField
          label="Taxa de Juros"
          name="monthlyInterest"
          inputRef={register({ required: 'Insira o valor' })}
          error={errors.monthlyInterest?.message}
          type="number"
        />
        <TextField
          label="Total de Parcelas"
          name="numberOfInstallments"
          inputRef={register({ required: 'Insira o valor' })}
          error={errors.numberOfInstallments?.message}
          type="number"
        />
        <Button color="primary" type="submit">
          Simular
        </Button>
      </StyledForm>
    </>
  );
};

export default LoanSimulatorForm;
