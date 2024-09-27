import styled, { css } from "styled-components";

export const Alert = styled.span`
  text-align: center;
  font-size: 28px;
  font-weight: bold;

  ${({ $loading }) =>
    $loading &&
    css`
      color: ${({ theme }) => theme.color.yellow};
    `}

  ${({ $error }) =>
    $error &&
    css`
      color: ${({ theme }) => theme.color.tainoi};
    `}
`;
