import styled from "styled-components";

export const Field = styled.fieldset`
    color: ${({ theme }) => theme.color.white};
    background: ${({ theme }) => theme.color.blackTransparent};
    border: 1px solid;
    border-radius: 8px;
    max-width: 415px;
    padding: 0 20px;
    margin: 50px auto;
`;