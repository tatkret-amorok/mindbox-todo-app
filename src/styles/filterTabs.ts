import { css, styled } from "styled-components";

export const STabsWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  gap: 10px;
`;

export const STabButton = styled.button<{ active: boolean }>`
  background: none;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  ${(props) =>
    props.active &&
    css`
      border: 1px solid ${props.theme.colors.primary};
      border-radius: 4px;
    `}
`;