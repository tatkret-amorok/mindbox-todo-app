import { css, styled } from "styled-components";

export const SItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  cursor: pointer;
  &:hover {
    background-color: #fafafa;
  }
`;

export const SRadio = styled.div<{ isCompleted: boolean }>`
  width: 20px;
  height: 20px;
  border: 2px solid ${(props) => props.theme.colors.primary};
  border-radius: 50%;
  margin-right: 15px;
  position: relative;
  
  ${(props) =>
    props.isCompleted &&
    css`
      background: ${(props) => props.theme.colors.primary};
      &:after {
        content: '❯';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateZ(90deg);
        transform: rotate(180);
        color: #80c4b4;
      }
    `}
`;

export const STodoText = styled.span<{ isCompleted: boolean }>`
  font-size: 16px;
  color: ${(props) =>
    props.isCompleted ? props.theme.colors.completedText : props.theme.colors.text};
  text-decoration: ${(props) => (props.isCompleted ? 'line-through' : 'none')};
`;
