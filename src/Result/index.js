import { Title } from "../GlobalStyle.js"
import { Button, TargetAmount } from "./styled.js";

const Result = ({ data, title, rate, count, result }) => (
    <>
        {data.status === "content" && (
            <p>
                <Title>
                    {title}
                    <strong>{rate.toFixed(2)}</strong>
                </Title>
                <Button onClick={count}>Przelicz</Button>
                <TargetAmount>
                    {result ? `
                        ${result.inputAmount.toFixed(2)}
                        ${result.inCurrency} 
                        =
                        ${result.outputAmount.toFixed(2)} 
                        ${result.outCurrency}` : null}
                </TargetAmount>
            </p>
        )}
    </>
);

export default Result;