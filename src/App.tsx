import { useState, useEffect } from "react";
import { useCurrencies } from "./Currency/useCurrencies";
import Form from "./Form";
import Header from "./Header";
import Clock from "./Clock";
import Loading from "./Loading";
import Currency from "./Currency";
import Amount from "./Amount";
import Result from "./Result";
import Footer from "./Footer";
import { ResultDetails } from "./types";

function App() {
  const ratesData = useCurrencies();

  const [amount, setAmount] = useState<number | null>(null);
  const [inCurrency, setInCurrency] = useState<string>("EUR");
  const [outCurrency, setOutCurrency] = useState<string>("PLN");
  const [rate, setRate] = useState<number | null>(null);
  const [result, setResult] = useState<ResultDetails | null>(null);

  const division = ratesData.data
    ? ratesData.data[outCurrency].value / ratesData.data[inCurrency].value
    : null;

  useEffect(() => {
    setRate(division);
  }, [division]);

  const count = () => {
    setResult({
      inputAmount: amount!,
      inCurrency,
      outputAmount: amount! * rate!,
      outCurrency,
    });
  };

  return (
    <Form onSubmit={count}>
      <Header title="Kalkulator walut" />
      <Clock />
      <Loading ratesData={ratesData} />
      <Currency
        title="Waluta do przeliczenia"
        ratesData={ratesData}
        currency={inCurrency}
        setCurrency={setInCurrency}
      />
      <Amount
        title="Wprowadź kwotę"
        ratesData={ratesData}
        amount={amount}
        setAmount={setAmount}
      />
      <Currency
        title="Przelicz na walutę"
        ratesData={ratesData}
        currency={outCurrency}
        setCurrency={setOutCurrency}
      />
      <Result
        title="Kurs wymiany: "
        ratesData={ratesData}
        rate={rate}
        result={result}
      />
      <Footer ratesData={ratesData} />
    </Form>
  );
}

export default App;
