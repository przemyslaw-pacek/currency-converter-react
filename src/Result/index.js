import { Title } from "../Currency/styled.js";
import { TargetAmount } from "./styled.js";

const Result = ({ title, result }) => (
    <p>
        <Title>{title}</Title>
        <TargetAmount>
            {result ? `${result.resultAmount.toFixed(2)} ${result.symbolCurrency}` : null}
        </TargetAmount>
    </p>
)

export default Result;