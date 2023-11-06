import { useState } from "react";
import "./style.css";
import "../App.js"

const Currency = ({ title, currencies, inCurrency, outCurrency, exchangeRate }) => {
  const [currency, setCurrency] = useState();

  const onFormSubmit = (event) => {
    event.preventDefault();
    inCurrency(currency());
    outCurrency(currency());
  };

  return (
    <p>
      <form onSubmit={onFormSubmit}>
        <span className="title">{title}</span>
        <select
          className="currency"
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map((currency) => (
            <option input={exchangeRate} key={currency.number} value={currency.number}>
              {currency.name}
            </option>
          ))}
        </select>
      </form>
    </p>
  );
};

export default Currency;