import { useState } from "react";
import { useCurrencies } from "./Loading/useCurrencies.js";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import Loading from "./Loading";
import Currency from "./Currency";
import Amount from "./Amount";
import Result from "./Result";
import Footer from "./Footer";

function App() {
  const data = useCurrencies();
  const currencies = Object.values(data.data.data);

  const [amount, setAmount] = useState("");
  const [inCurrency, setInCurrency] = useState(currencies[54].value);
  const [outCurrency, setOutCurrency] = useState(currencies[128].value);
  const [rate, setRate] = useState(outCurrency / inCurrency);
  const [result, setResult] = useState("");

  const exchangeRate = () => {
    setRate(outCurrency / inCurrency);
  };

  const count = () => {
    const inputCurrency = currencies.find(({ value }) => value === +inCurrency).code;
    const outputCurrency = currencies.find(({ value }) => value === +outCurrency).code;

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
      <Loading />
      <Currency
        data={data}
        title="Waluta do przeliczenia"
        currencies={currencies}
        currency={inCurrency}
        setCurrency={setInCurrency}
        exchangeRate={exchangeRate}
      />
      <Amount
        data={data}
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
        data={data}
        title="Kurs wymiany: "
        rate={rate}
        result={result}
      />
      <Footer
        data={data}
      />
    </Form>
  );
};
export default App;