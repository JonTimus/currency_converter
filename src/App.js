import React from "react";
import { useEffect, useState } from "react";
import "./App.css";
import CurrencyLogic from "./components/CurrencyLogic";

const BASE_URL_API =
  "http://api.exchangeratesapi.io/v1/latest?access_key=8ff5d2ad8242f77f234452af094cedbc";

function App() {
  /* currency related states */

  const [currencyVariants, setCurrencyVariants] = useState([]); // no options in the begining
  const [toCurrency, setToCurrency] = useState();
  const [fromCurrency, setFromCurrency] = useState();
  const [amount, setAmount] = useState(1);
  const [fromCurrencyAmount, setFromCurrencyAmount] = useState(true); // for checking which box to convert from
  const [exchangeRate, setExchangeRate] = useState();

  // console.log(exchangeRate);

  let toAmount, fromAmount;
  if (fromCurrencyAmount) {
    fromAmount = amount;
    toAmount = amount * exchangeRate || 0;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate; // reversing to get the result
  }

  useEffect(() => {
    fetch(BASE_URL_API)
      .then((res) => res.json())
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyVariants([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
      }); // will get the key part of rates
  }, []); // calls once

  useEffect(() => {
    if (fromCurrency === toCurrency && fromCurrency != null) {
      setExchangeRate(1);
    } else if (fromCurrency !== undefined && toCurrency !== undefined) {
      fetch(`${BASE_URL_API}&base=${fromCurrency}&symbols=${toCurrency}`)
        .then((res) => res.json())
        .then((data) => setExchangeRate(data.rates[toCurrency]));
    }
  }, [fromCurrency, toCurrency]); // anytime the currency changes

  // from conversion
  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setFromCurrencyAmount(true);
  }

  // to conversion
  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setFromCurrencyAmount(false);
  }

  return (
    <React.Fragment>
      <h1>Конвертер Валют на ReactJS</h1>
      <h2>Конвертер</h2>

      <CurrencyLogic
        currencyVariants={currencyVariants}
        selectedCurrency={fromCurrency}
        onChangeCurrency={(e) => setFromCurrency(e.target.value)} // gets the value of the select
        onChangeAmount={handleFromAmountChange}
        amount={fromAmount}
      />
      <div id="equal">=</div>
      <CurrencyLogic
        currencyVariants={currencyVariants}
        selectedCurrency={toCurrency}
        onChangeCurrency={(e) => setToCurrency(e.target.value)} // gets the value of the select
        onChangeAmount={handleToAmountChange}
        amount={toAmount}
      />
    </React.Fragment>
  );
}

export default App;
