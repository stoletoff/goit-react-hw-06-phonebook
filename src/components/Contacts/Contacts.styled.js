import styled from 'styled-components';

export const ContactsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const ContactsItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: 1;
  text-align: center;
  padding: 15px;
  border-radius: 15px;
  border: 2px solid ${({ theme: { helpers } }) => helpers.goldenRod};
  background-color: ${({ theme: { helpers } }) => helpers.white};
`;

export const ButtonDelete = styled.button`
  display: flex;
  justify-content: center;
  font-size: 16px;
  width: 75px;
  margin-left: auto;
  margin-right: auto;
  padding: 4px 8px;
  color: ${({ theme: { helpers } }) => helpers.black};
  border-radius: 15px;
  border: 2px solid ${({ theme: { helpers } }) => helpers.red};
  background-color: ${({ theme: { helpers } }) => helpers.white};
  :hover {
    background-color: ${({ theme: { helpers } }) => helpers.red};
    color: ${({ theme: { helpers } }) => helpers.white};
  }
`;