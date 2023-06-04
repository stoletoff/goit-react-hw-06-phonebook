import styled from 'styled-components';

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.label`
  text-align: center;
  font-size: 18px;
`;

export const Input = styled.input`
  width: 200px;
  padding: 10px;
  border-radius: 15px;
  border: 2px solid ${({ theme: { helpers } }) => helpers.goldenRod};
`;