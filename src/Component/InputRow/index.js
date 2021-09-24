import {
  InputCurrency,
  SelectCurrency,
  CurrencyOption,
  InputRowContainer,
} from "./StyledComponent";

const InputRow = (props) => {
  const {
    amount,
    onChangeAmount,
    currencyOptions,
    selectedCurrency,
    onChangeCurrencySelection,
  } = props;
  return (
    <InputRowContainer>
      <InputCurrency type="number" value={amount} onChange={onChangeAmount} />
      <SelectCurrency
        value={selectedCurrency}
        onChange={onChangeCurrencySelection}
      >
        {currencyOptions.map((currency) => (
          <CurrencyOption value={currency} key={currency}>
            {currency}
          </CurrencyOption>
        ))}
      </SelectCurrency>
    </InputRowContainer>
  );
};
export default InputRow;
