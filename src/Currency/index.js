import { SelectCurrency, Title } from "./styled.js";

const Currency = ({ title, currencies, currency, setCurrency, exchangeRate }) => (
  <p>
    <label>
      <Title>{title}</Title>
      <SelectCurrency
        onClick={exchangeRate}
        value={currency}
        onChange={({ target }) => setCurrency(target.value)}
      >
        {currencies.map(currency => (
          <option key={currency.rate} value={currency.rate}>
            {currency.name}
          </option>
        ))}
      </SelectCurrency>
    </label>
  </p>
);

export default Currency;