import styled from "styled-components";

export const CurrencyConverterComponentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.h1`
  font-family: "Bree Serif";
  font-weight: 700;
  font-size: 26px;
  color: #000;
  text-align: center;
  @media screen and (min-width: 576px) {
    font-size: 32px;
  }
`;
