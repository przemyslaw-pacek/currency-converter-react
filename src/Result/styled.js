import styled from "styled-components";

export const Button = styled.button`
    width: 100%;
    max-width: 200px;
    margin: 10px 0;
    cursor: pointer;
`;

export const TargetAmount = styled.strong`
    color: ${({ theme }) => theme.color.yellow};
    margin: 8px;
    display: grid;
    justify-content: center;
`;