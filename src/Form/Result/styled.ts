import styled from "styled-components";

export const Button = styled.button`
  width: 100%;
  max-width: 240px;
  margin: 10px 0;
  font-weight: bold;
  cursor: pointer;
`;

export const TargetAmount = styled.strong`
  color: ${({ theme }) => theme.color.yellow};
  margin: 8px;
  display: grid;
  justify-content: center;
`;
