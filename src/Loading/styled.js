import styled, { css } from "styled-components";

export const Alert = styled.p`
    font-size: large;
    text-align: center;

    ${({ loading }) => loading && css`    
        color: ${({ theme }) => theme.color.yellow};
    `}

    ${({ error }) => error && css`    
        color: ${({ theme }) => theme.color.red};
    `}
`;