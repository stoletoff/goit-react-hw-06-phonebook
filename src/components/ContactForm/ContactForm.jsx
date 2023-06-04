import React from 'react';
import { nanoid } from 'nanoid';
import * as yup from 'yup';
import { Formik } from 'formik';
import {
  FormStyle,
  InputName,
  InputWrapper,
  InputLabel,
  ButtonForm,
  ErrorMessageStyle,
} from './ContactForm.styled';

const schema = yup.object().shape({
  name: yup.string().required("Name is required!"),
  number: yup
    .string()
    .required("Phone number is required!")
    .matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/, 'The number must contain at least 7 digits')
    .min(7),
});

const initialValues = {
  name: '',
  number: '',
};

export const ContactForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values.name, values.number);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={schema}
    >
      <FormStyle>
        <InputWrapper>
          <InputLabel htmlFor={nanoid()}>Name</InputLabel>
          <InputName
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={nanoid()}
          />
          <ErrorMessageStyle name="name" component="div" />
        </InputWrapper>
        <InputWrapper>
          <InputLabel htmlFor={nanoid()}>Phone number</InputLabel>
          <InputName
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={nanoid()}
          />
          <ErrorMessageStyle name="number" component="div" />
        </InputWrapper>
        <ButtonForm type="submit">Add contact</ButtonForm>
      </FormStyle>
    </Formik>
  );
};
