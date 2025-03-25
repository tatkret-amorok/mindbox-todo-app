import { styled } from "styled-components";

export const SButton = styled.button`
  flex: 1;
  background: none;
  border: none;
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
`;
