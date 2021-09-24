import { Component } from "react";

import {
  OneToManyConversionsContainer,
  Heading,
  FromContainer,
  ToContainer,
  ConversionContainer,
  ToItem,
} from "./StyledComponents";

import InputRow from "../InputRow";

class oneToManyConversion extends Component {
  state = {
    amount: 1,
    fromCurrency: "",
    toList: [],
    currencyOptions: [],
  };

  componentDidMount() {
    const { data } = this.props;
    const options = Object.keys(data.rates);
    const toList = this.getInitialToList(options);
    this.setState({
      toList: toList,
      currencyOptions: options,
      fromCurrency: data.base,
    });
  }

  getInitialToList = (options) => {
    const { data } = this.props;
    const listLength = 4;
    let toList = [];
    let i = 0;
    while (i < listLength) {
      toList.push({
        toCurrency: options[i],
        exchangeRate: data.rates[options[i]],
        key: i,
      });
      i += 1;
    }
    return toList;
  };

  handleToCurrencyChange = (event) => {
    // disabled dummy function
  };

  handleToAmountChange = () => {
    //disabled dummy function
  };

  setExchangeRate = () => {
    const { data } = this.props;
    const { fromCurrency, toList } = this.state;
    const factor = data.rates[fromCurrency];
    const updatedExchangeRatesToList = toList.map((toItem) => ({
      toCurrency: toItem.toCurrency,
      exchangeRate: data.rates[toItem.toCurrency] / factor,
    }));
    this.setState({ toList: updatedExchangeRatesToList });
  };

  handleFromCurrencyChange = (event) => {
    this.setState(
      {
        fromCurrency: event.target.value,
      },
      this.setExchangeRate
    );
  };

  handleFromAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  render() {
    const { amount, currencyOptions, fromCurrency, toList } = this.state;
    return (
      <OneToManyConversionsContainer>
        <Heading>One To Many</Heading>
        <ConversionContainer>
          <FromContainer>
            <InputRow
              amount={amount}
              onChangeAmount={this.handleFromAmountChange}
              currencyOptions={currencyOptions}
              selectedCurrency={fromCurrency}
              onChangeCurrencySelection={this.handleFromCurrencyChange}
            />
          </FromContainer>
          <Heading>To</Heading>
          <ToContainer>
            {toList.map((toItem) => (
              <ToItem key={toItem.key}>
                <InputRow
                  amount={amount * toItem.exchangeRate}
                  selectedCurrency={toItem.toCurrency}
                  onChangeCurrencySelection={this.handleToCurrencyChange}
                  onChangeAmount={this.handleToAmountChange}
                  currencyOptions={currencyOptions}
                />
              </ToItem>
            ))}
          </ToContainer>
        </ConversionContainer>
      </OneToManyConversionsContainer>
    );
  }
}
export default oneToManyConversion;
