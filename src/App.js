import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Currency from "./Currency";
import Amount from "./Amount";
import Rate from "./Rate";
import Result from "./Result";

function App() {
  const currencies = [
    { name: "PLN", number: 1, symbol: "zł" },
    { name: "EUR", number: 4.46, symbol: "€" },
    { name: "GBP", number: 5.19, symbol: "£" },
    { name: "USD", number: 3.97, symbol: "$" },
  ];
  const [amount, setAmount] = useState("")
  const [inCurrency, setInCurrency] = useState(4.46);
  const [outCurrency, setOutCurrency] = useState(1);
  const [rate, setRate] = useState(4.46);
  const [result, setResult] = useState("");

  const exchangeRate = () => {
    setRate(inCurrency / outCurrency);
  };

  const count = () => {
    const symbol = currencies.find(({ number }) => number === outCurrency).symbol;

    setResult(
      (amount * rate),
      (symbol)
    );
  };

  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Currency
        title="Waluta do przeliczenia"
        currencies={currencies}
        currency={inCurrency}
        setCurrency={setInCurrency}
        exchangeRate={exchangeRate}
      />
      <Amount
        title="Wprowadź kwotę"
        amount={amount}
        setAmount={setAmount}
      />
      <Currency
        title="Przelicz na walutę"
        currencies={currencies}
        currency={outCurrency}
        setCurrency={setOutCurrency}
        exchangeRate={exchangeRate}
      />
      <Rate
        title="Kurs wymiany: "
        rate={rate}
        count={count}
      />
      <Result
        title="Kwota po przeliczeniu:"
        result={result}
      />
    </Container>
  );
};
export default App;