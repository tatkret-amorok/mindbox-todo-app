import { styled } from "styled-components";

export const SInputWrapper = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
`;

export const SStyledInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  font-size: 16px;
  border: none;
  outline: none;
  background: #f0f0f0;
  border-radius: 4px;

  &::placeholder {
    color: #aaa;
  }
`;
