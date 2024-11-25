import { Title } from "../../core/GlobalStyle";
import { SelectCurrency } from "./styled";
import type { Data } from "../../core/types";

interface CurrencyProps {
  ratesData: Partial<Data>;
  title: string;
  currency: string;
  setCurrency: (currency: string) => void;
}

const Currency = ({
  ratesData,
  title,
  currency,
  setCurrency,
}: CurrencyProps) => {
  return (
    <>
      {ratesData.status === "success" && (
        <p>
          <label>
            <Title>{title}</Title>
            <SelectCurrency
              value={currency}
              onChange={({ target }) => setCurrency(target.value)}
            >
              {ratesData.data &&
                Object.keys(ratesData.data).map((currency) => (
                  <option key={currency} value={currency}>
                    {currency}
                  </option>
                ))}
            </SelectCurrency>
          </label>
        </p>
      )}
    </>
  );
};

export default Currency;
