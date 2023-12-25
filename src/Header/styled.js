import styled from "styled-components";

export const Legend = styled.legend`
    background: ${({ theme }) => theme.color.mongoose};
    border: 1px solid;
    border-radius: 8px;
    padding: 5px;
    font-size: 18px;
`;