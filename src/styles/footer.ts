import { styled } from "styled-components";

export const SFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 15px 20px;
  background: #fafafa;
  border-top: 1px solid ${(props) => props.theme.colors.border};
  font-size: 14px;
`;
