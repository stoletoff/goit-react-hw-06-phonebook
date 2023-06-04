import styled from 'styled-components';
import { Form, Field, ErrorMessage } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;

export const InputName = styled(Field)`
  width: 200px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid ${({ theme: { helpers } }) => helpers.goldenRod};
`;

export const InputLabel = styled.label`
  font-size: 18px;
`;

export const ButtonForm = styled.button`
  display: block;
  text-align: center;
  width: 150px;
  margin-left: auto;
  margin-right: auto;
  padding: 15px;
  border-radius: 15px;
  border: 2px solid ${({ theme: { helpers } }) => helpers.goldenRod};
  background-color: ${({ theme: { helpers } }) => helpers.white};

  font-size: 16px;

  &:hover {
    background-color: ${({ theme: { helpers } }) => helpers.goldenRod};
  }
`;

export const ErrorMessageStyle = styled(ErrorMessage)`
  margin-top: 10px;
  font-style: italic;
  width: 160px;
  text-align: center;
  color: ${({ theme: { helpers } }) => helpers.red};
`;
