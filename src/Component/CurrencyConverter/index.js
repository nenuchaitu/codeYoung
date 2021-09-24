import { Component } from "react";

import InputRow from "../InputRow";

import { CgArrowsExchangeAlt } from "react-icons/cg";

import {
  CurrencyConverterComponentContainer,
  Heading,
} from "./StyledComponents";

class CurrencyConverter extends Component {
  state = {
    currencyOptions: [],
    fromCurrency: "",
    toCurrency: "",
    amount: 1,
    amountInFromCurrency: true,
    exchangeRate: 0,
  };

  componentDidMount() {
    const { data } = this.props;
    const options = Object.keys(data.rates);
    this.setState({
      currencyOptions: options,
      fromCurrency: data.base,
      toCurrency: options[0],
      exchangeRate: data.rates[options[0]],
    });
  }

  setExchangeRate = () => {
    const { data } = this.props;
    const { toCurrency, fromCurrency } = this.state;
    const currencyFromExchangeRateToBaseEuro = data.rates[fromCurrency];
    const currencyToExchangeRateToBaseEuro = data.rates[toCurrency];
    const newExchangeRate =
      currencyToExchangeRateToBaseEuro / currencyFromExchangeRateToBaseEuro;
    this.setState({ exchangeRate: newExchangeRate });
  };

  handleFromCurrencyChange = (event) => {
    this.setState(
      {
        fromCurrency: event.target.value,
      },
      this.setExchangeRate
    );
  };

  handleToCurrencyChange = (event) => {
    this.setState(
      {
        toCurrency: event.target.value,
      },
      this.setExchangeRate
    );
  };

  handleFromAmountChange = (event) => {
    this.setState({ amount: event.target.value, amountInFromCurrency: true });
  };

  handleToAmountChange = (event) => {
    this.setState({ amount: event.target.value, amountInFromCurrency: false });
  };

  render() {
    const {
      currencyOptions,
      fromCurrency,
      exchangeRate,
      toCurrency,
      amount,
      amountInFromCurrency,
    } = this.state;
    let fromAmount;
    let toAmount;
    if (amountInFromCurrency) {
      fromAmount = amount;
      toAmount = fromAmount * exchangeRate;
    } else {
      toAmount = amount;
      fromAmount = toAmount / exchangeRate;
    }

    return (
      <CurrencyConverterComponentContainer>
        <Heading>Two way Conversion</Heading>
        <InputRow
          amount={fromAmount}
          onChangeAmount={this.handleFromAmountChange}
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrencySelection={this.handleFromCurrencyChange}
        />
        <CgArrowsExchangeAlt size={40} />
        <InputRow
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrencySelection={this.handleToCurrencyChange}
          amount={toAmount}
          onChangeAmount={this.handleToAmountChange}
        />
      </CurrencyConverterComponentContainer>
    );
  }
}

export default CurrencyConverter;
