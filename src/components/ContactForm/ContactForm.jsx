import React from 'react';
import { nanoid } from 'nanoid';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import {
  FormStyle,
  InputName,
  InputWrapper,
  InputLabel,
  ButtonForm,
  ErrorMessageStyle,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required('Name is required!'),
  number: yup
    .string()
    .required('Phone number is required!')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'The number must contain at least 7 digits'
    )
    .min(7),
});

export const ContactForm = ({ addContact }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = data => {
    addContact(data.name, data.number);
    reset();
  };

  return (
    <FormStyle onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <InputLabel htmlFor={nanoid()}>Name</InputLabel>
        <InputName
          {...register('name')}
          type="text"
          name="name"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id={nanoid()}
        />
        {errors.name && (
          <ErrorMessageStyle>{errors.name?.message}</ErrorMessageStyle>
        )}
      </InputWrapper>
      <InputWrapper>
        <InputLabel htmlFor={nanoid()}>Phone number</InputLabel>
        <InputName
          {...register('number')}
          type="tel"
          name="number"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id={nanoid()}
        />
        {errors.number && (
          <ErrorMessageStyle>{errors.number?.message}</ErrorMessageStyle>
        )}
      </InputWrapper>
      <ButtonForm type="submit">Add contact</ButtonForm>
    </FormStyle>
  );
};
