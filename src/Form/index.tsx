import { FormEvent } from "react";
import { Field, Header, Loading, Error } from "./styled";
import { useState } from "react";
import { useCurrencies } from "./Currency/useCurrencies";
import Clock from "./Clock";
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
        <Header>Kalkulator walut</Header>
        <Clock />
        {ratesData.status === "loading" ? (
          <Loading>
            <p>Ładowanie...</p>
            <p>Pobieranie danych z serwera.</p>
          </Loading>
        ) : ratesData.status === "error" ? (
          <Error>
            <p>Coś poszło nie tak.</p>
            <p>Brak połączenia z serwerem.</p>
            <p>Spróbuj ponownie!</p>
          </Error>
        ) : (
          <>
            <Currency
              title="Waluta do przeliczenia"
              ratesData={ratesData}
              currency={inCurrency}
              setCurrency={setInCurrency}
            />
            <Amount
              title="Wprowadź kwotę"
              amount={amount}
              setAmount={setAmount}
            />
            <Currency
              title="Przelicz na walutę"
              ratesData={ratesData}
              currency={outCurrency}
              setCurrency={setOutCurrency}
            />
            <Result title="Kurs wymiany: " rate={rate} result={result} />
            <Footer ratesData={ratesData} />
          </>
        )}
      </Field>
    </form>
  );
};

export default Form;
