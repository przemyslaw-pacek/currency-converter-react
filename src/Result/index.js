import { Title } from "../GlobalStyle.js";
import { Button, TargetAmount } from "./styled.js";

const Result = ({ data, title, rate, result }) => {
  const formatNumber = (number) => {
    return number.toLocaleString("pl-PL", {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      {data.status === "content" && (
        <p>
          <Title>
            {title}
            <strong>{formatNumber(rate)}</strong>
          </Title>
          <Button>Przelicz</Button>
          <TargetAmount>
            {result
              ? `
                ${formatNumber(result.inputAmount)}
                ${result.inCurrency} 
                =
                ${formatNumber(result.outputAmount)} 
                ${result.outCurrency}`
              : null}
          </TargetAmount>
        </p>
      )}
    </>
  );
};

export default Result;
