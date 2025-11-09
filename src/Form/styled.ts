import styled from "styled-components";

export const Field = styled.fieldset`
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.blackTransparent};
  border: 1px solid;
  border-radius: 8px;
  max-width: 510px;
  padding: 0 25px;
  margin: 100px auto;
  font-size: 18px;
`;

export const Header = styled.legend`
  background: ${({ theme }) => theme.color.mongoose};
  border: 1px solid;
  border-radius: 8px;
  padding: 5px;
  font-size: 20px;
`;

export const Loading = styled.div`
  color: ${({ theme }) => theme.color.yellow};
  text-align: center;
  font-size: 28px;
  font-weight: bold;
`;

export const Error = styled(Loading)`
  color: ${({ theme }) => theme.color.tainoi};
`;
