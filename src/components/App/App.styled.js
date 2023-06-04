import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px;
  background-color: ${({ theme: { helpers } }) => helpers.floralWhite};
`;

export const MainTitle = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
  color: ${({ theme: { helpers } }) => helpers.black};
`;
export const Title = styled.h2`
  font-size: 26px;
  text-align: center;
  margin-bottom: 20px;
`;

export const EmptyText = styled.p`
  margin: 0;
  color: ${({ theme: { helpers } }) => helpers.red};
`;
