import { useState } from "react";
import Container from "./Container";
import Header from "./Header";
import Currency from "./Currency";
import Amount from "./Amount";
import Rate from "./Rate";
import Result from "./Result";
import currencies from "./currencies";

function App() {
  const [amount, setAmount] = useState("")
  const [inCurrency, setInCurrency] = useState(4.46);
  const [outCurrency, setOutCurrency] = useState(1);
  const [rate, setRate] = useState(4.46);
  const [result, setResult] = useState("");

  const exchangeRate = () => {
    setRate(inCurrency / outCurrency);
  };

  const count = () => {
    const symbolCurrency = currencies.find(({ number }) => number === outCurrency).symbol;

    setResult({
      resultAmount: amount * rate,
      symbolCurrency
    });
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