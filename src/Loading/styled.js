import styled, { css } from "styled-components";

export const Alert = styled.p`
    text-align: center;
    font-size: 20px;
    font-weight: bold;

    ${({ loading }) => loading && css`    
        color: ${({ theme }) => theme.color.yellow};
    `}

    ${({ error }) => error && css`    
        color: ${({ theme }) => theme.color.tainoi};
    `}
`;