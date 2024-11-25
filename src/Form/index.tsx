import { FormEvent } from "react";
import { Field } from "./styled";
import { useState } from "react";
import { useCurrencies } from "./Currency/useCurrencies";
import Header from "./Header";
import Clock from "./Clock";
import Loading from "./Loading";
import Currency from "./Currency";
import Amount from "./Amount";
import Result from "./Result";
import Footer from "./Footer";
import { ResultDetails } from "../core/types";

const Form = () => {
  const ratesData = useCurrencies();

  const [amount, setAmount] = useState<number | null>(null);
  const [inCurrency, setInCurrency] = useState<string>("EUR");
  const [outCurrency, setOutCurrency] = useState<string>("PLN");
  const [result, setResult] = useState<ResultDetails | null>(null);

  const rate = ratesData.data
    ? ratesData.data[outCurrency].value / ratesData.data[inCurrency].value
    : null;

  const onFormSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (amount && rate) {
      setResult({
        inputAmount: amount,
        inCurrency,
        outputAmount: amount * rate,
        outCurrency,
      });
    }
  };

  return (
    <form onSubmit={onFormSubmit}>
      <Field>
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
      </Field>
    </form>
  );
};

export default Form;
