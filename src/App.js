import { useState } from "react";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import Currency from "./Currency";
import Amount from "./Amount";
import Result from "./Result";
import currencies from "./currencies";
import Footer from "./Footer";

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
    const inputCurrency = currencies.find(({ rate }) => rate === +inCurrency).name;
    const outputCurrency = currencies.find(({ rate }) => rate === +outCurrency).name;

    setResult({
      inputAmount: +amount,
      inputCurrency,
      outputAmount: amount * rate,
      outputCurrency
    });
  };

  return (
    <Form onSubmit={count}>
      <Header title="Kalkulator walut" />
      <Clock />
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
      <Result
        title="Kurs wymiany: "
        rate={rate}
        result={result}
      />
      <Footer />
    </Form>
  );
};
export default App;