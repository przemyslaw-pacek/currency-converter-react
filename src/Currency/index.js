import "./style.css";

const Currency = ({ title, currencies, currency, setCurrency, exchangeRate }) => {

  const onFormSubmit = (event) => {
   event.preventDefault();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <p>
        <span className="title">{title}</span>
        <select 
          className="currency"
          onClick={exchangeRate}
          value={currency}
          onChange={({ target }) => setCurrency(target.value)}
        >
          {currencies.map(currency => (
            <option key={currency.number} value={currency.number}>
              {currency.name}
            </option>
          ))}
        </select>
      </p>
    </form>
  );
};

export default Currency;