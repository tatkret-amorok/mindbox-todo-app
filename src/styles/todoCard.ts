import styled from 'styled-components';

export const SCard = styled.div`
  width: 400px;
  margin: 10px auto;
  background: ${(props) => props.theme.colors.background};
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  border-radius: 8px;
  overflow: hidden;
`;

export const STitle = styled.h1`
  font-family: Verdana, sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  margin-bottom: 5px;
`;