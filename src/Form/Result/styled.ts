import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 200px;
  margin-top: 10px;
  font-weight: bold;
  cursor: pointer;
`;

export const TargetAmount = styled.p`
  color: ${({ theme }) => theme.color.yellow};
  font-weight: bold;
  text-align: center;
  word-break: break-word;
`;
