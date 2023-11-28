import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import Currency from "./Currency";
import Amount from "./Amount";
import Rate from "./Rate";
import Result from "./Result";
import currencies from "./currencies";

function App() {
  const [amount, setAmount] = useState("");
  const [inCurrency, setInCurrency] = useState(currencies[1].rate);
  const [outCurrency, setOutCurrency] = useState(currencies[0].rate);
  const [rate, setRate] = useState(currencies[1].rate);
  const [result, setResult] = useState("");

  const exchangeRate = () => {
    setRate(inCurrency / outCurrency);
  };

  const count = () => {
    const symbolCurrency = currencies.find(({ rate }) => rate === +outCurrency).symbol;

    setResult({
      resultAmount: amount * rate,
      symbolCurrency
    });
  };

  return (
    <Form onSubmit={count}>
      <Header title="Kalkulator walut" />
      <Clock
        text="Dzisiaj jest "
      />
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
      />
      <Result
        title="Kwota po przeliczeniu:"
        result={result}
      />
    </Form>
  );
};
export default App;