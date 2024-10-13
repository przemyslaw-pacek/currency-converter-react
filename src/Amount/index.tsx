import { Title } from "../GlobalStyle";
import { Input } from "./styled";
import { Data } from "../types";

interface AmountProps {
  ratesData: Partial<Data>;
  title: string;
  amount: number | null;
  setAmount: (amount: number | null) => void;
}

const Amount = ({ ratesData, title, amount, setAmount }: AmountProps) => (
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
            onChange={({ target }) => setAmount(parseFloat(target.value))}
          />
        </label>
      </p>
    )}
  </>
);

export default Amount;
