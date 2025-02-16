import { Title } from "../../core/GlobalStyle";
import { Input } from "./styled";

interface AmountProps {
  title: string;
  amount: number | null;
  setAmount: (amount: number | null) => void;
}

const Amount = ({ title, amount, setAmount }: AmountProps) => {
  const handleInputChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    const parsedValue = parseFloat(value);
    setAmount(value === "" || isNaN(parsedValue) ? null : parsedValue);
  };

  return (
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
  );
};

export default Amount;
