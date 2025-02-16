import { Title } from "../../core/GlobalStyle";
import { ResultDetails } from "../../core/types";
import { Button, TargetAmount } from "./styled";

interface ResultProps {
  title: string;
  rate: number | null;
  result: ResultDetails | null;
}

const Result = ({ title, rate, result }: ResultProps) => {
  const formatNumber = (number: number) =>
    number.toLocaleString(undefined, {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  return (
    <div>
      <Title>
        {title}
        <strong>{rate !== null && formatNumber(rate)}</strong>
      </Title>
      <Button>Przelicz</Button>
      {result && (
        <TargetAmount>
          {`${formatNumber(result.inputAmount)}
            ${result.inCurrency} 
            =
            ${formatNumber(result.outputAmount)} 
            ${result.outCurrency}`}
        </TargetAmount>
      )}
    </div>
  );
};

export default Result;
