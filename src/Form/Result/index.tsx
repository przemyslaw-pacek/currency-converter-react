import { Title } from "../../core/GlobalStyle";
import { Data, ResultDetails } from "../../core/types";
import { Button, TargetAmount } from "./styled";

interface ResultProps {
  ratesData: Partial<Data>;
  title: string;
  rate: number | null;
  result: ResultDetails | null;
}

const Result = ({ ratesData, title, rate, result }: ResultProps) => {
  const formatNumber = (number: number) => {
    return number.toLocaleString(undefined, {
      useGrouping: true,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  return (
    <>
      {ratesData.status === "success" && (
        <p>
          <Title>
            {title}
            <strong>{rate !== null && formatNumber(rate)}</strong>
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
