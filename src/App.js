import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Currency from "./Currency";
import Content from "./Content";
import Rate from "./Rate";
import Result from "./Result";

function App() {
  const [rate, setRate] = useState(4.46);
  const currencies = [
    { name: "PLN", number: 1, symbol: "zł" },
    { name: "EUR", number: 4.46, symbol: "€" },
    { name: "GBP", number: 5.19, symbol: "£" },
    { name: "USD", number: 3.97, symbol: "$" },
  ];

  const amount = () => {
    setRate(({ content }) => content);
  };

  const inCurrency = () => {
    setRate(({ number }) => number);
  };

  const outCurrency = () => {
    setRate(({ number }) => number);
  };

  const exchangeRate = () => {
    setRate(rate => rate = ( inCurrency / outCurrency ));
  };

  const result = (currencies, outCurrency) => {
    currencies.map(amount => ( amount * exchangeRate ));
    outCurrency(currencies.map(({ symbol }) => symbol));
  };

  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Currency
        title="Waluta do przeliczenia"
        currencies={currencies}
        inCurrency={inCurrency}
        exchangeRate={exchangeRate}
      />
      <Content
        title="Wprowadź kwotę"
        amount={amount}
      />
      <Currency
        title="Przelicz na walutę"
        currencies={currencies}
        outCurrency={outCurrency}
        exchangeRate={exchangeRate}
      />
      <Rate
        title="Kurs wymiany: "
        rate={rate}
        result={result}
      />
      <Result
        title="Kwota po przeliczeniu:"
        result={result}
      />
    </Container>
  );
};

export default App;