import { Title } from "../GlobalStyle.js";
import { SelectCurrency } from "./styled.js";

const Currency = ({ data, title, currencies, currency, setCurrency }) => (
  <>
    {data.status === "content" && (
      <p>
        <label>
          <Title>{title}</Title>
          <SelectCurrency
            value={currency}
            onChange={({ target }) => setCurrency(target.value)}
          >
            {Object.keys(currencies).map(currency => (
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

export default Currency;