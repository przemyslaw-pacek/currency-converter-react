import styled, { css } from "styled-components";

export const Alert = styled.div<{
  $loading?: boolean;
  $error?: boolean;
}>`
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
