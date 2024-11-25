import { Title } from "../../core/GlobalStyle";
import { Input } from "./styled";
import { Data } from "../../core/types";

interface AmountProps {
  ratesData: Partial<Data>;
  title: string;
  amount: number | null;
  setAmount: (amount: number | null) => void;
}

const Amount = ({ ratesData, title, amount, setAmount }: AmountProps) => {
  const handleInputChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const value = target.value;

    if (value === "") {
      setAmount(null);
      return;
    }

    const parsedValue = parseFloat(value);

    if (!isNaN(parsedValue)) {
      setAmount(parsedValue);
      return;
    }
  };

  return (
    <>
      {ratesData.status === "success" && (
        <p>
          <label>
            <Title>{title}</Title>
            <Input
              required
              type="number"
              step="0.01"
              min="0.01"
              value={amount !== null ? amount : ""}
              onChange={handleInputChange}
            />
          </label>
        </p>
      )}
    </>
  );
};

export default Amount;
