import { useState, useEffect } from "react";
import { useCurrencies } from "./Currency/useCurrencies.js";
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
  const currencies = data?.data?.data;

  const [amount, setAmount] = useState("");
  const [inCurrency, setInCurrency] = useState("EUR");
  const [outCurrency, setOutCurrency] = useState("PLN");
  const [rate, setRate] = useState("");
  const [result, setResult] = useState("");

  const division = currencies?.[outCurrency].value / currencies?.[inCurrency].value;

  useEffect(() => {
    setRate(division);
  }, [division]);

  const exchangeRate = () => {
    setRate(division);
  };

  const count = () => {
    setResult({
      inputAmount: +amount,
      inCurrency,
      outputAmount: amount * rate,
      outCurrency,
    });
  };

  return (
    <Form onSubmit={count}>
      <Header title="Kalkulator walut" />
      <Clock />
      <Loading
        data={data}
      />
      <Currency
        title="Waluta do przeliczenia"
        data={data}
        currencies={currencies}
        currency={inCurrency}
        setCurrency={setInCurrency}
        exchangeRate={exchangeRate}
      />
      <Amount
        title="Wprowadź kwotę"
        data={data}
        amount={amount}
        setAmount={setAmount}
      />
      <Currency
        title="Przelicz na walutę"
        data={data}
        currencies={currencies}
        currency={outCurrency}
        setCurrency={setOutCurrency}
        exchangeRate={exchangeRate}
      />
      <Result
        title="Kurs wymiany: "
        data={data}
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