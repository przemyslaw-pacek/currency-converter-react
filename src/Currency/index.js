import "./style.css";

const Currency = ({ title, currencies, currency, setCurrency, exchangeRate }) => {

  return (
      <p>
        <span className="title">{title}</span>
        <select
          className="currency"
          onClick={exchangeRate}
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map(currency => (
            <option key={currency.rate} value={currency.rate}>
              {currency.name}
            </option>
          ))}
        </select>
      </p>
  );
};

export default Currency;