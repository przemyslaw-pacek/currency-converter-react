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
  const currencies = data?.data?.data;

  const [amount, setAmount] = useState("");
  const [inCurrency, setInCurrency] = useState("EUR");
  const [outCurrency, setOutCurrency] = useState("PLN");
  const [rate, setRate] = useState(currencies?.[outCurrency].value / currencies?.[inCurrency].value);
  const [result, setResult] = useState("");
  //console.log(currencies?.[outCurrency].value / currencies?.[inCurrency].value);

  const exchangeRate = () => {
    const inputCurrency = currencies[inCurrency].value;
    const outputCurrency = currencies[outCurrency].value;

    setRate(outputCurrency / inputCurrency);
  };

  const count = () => {
    setResult({
      inputAmount: +amount,
      inCurrency,
      outputAmount: amount * rate,
      outCurrency
    });
  };

  return (
    <Form onSubmit={count}>
      <Header title="Kalkulator walut" />
      <Clock />
      <Loading />
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