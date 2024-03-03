import { Title } from "../GlobalStyle.js"
import { Button, TargetAmount } from "./styled.js";

const Result = ({ data, title, rate, result }) => (
    <>
        {data.status === "content" && (
            <p>
                <Title>
                    {title}
                    <strong>{rate.toLocaleString("pl-PL", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })}</strong>
                </Title>
                <Button>Przelicz</Button>
                <TargetAmount>
                    {result ? `
                        ${result.inputAmount.toLocaleString()}
                        ${result.inCurrency} 
                        =
                        ${result.outputAmount.toLocaleString("pl-PL", {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                    })} 
                        ${result.outCurrency}` : null}
                </TargetAmount>
            </p>
        )}
    </>
);

export default Result;