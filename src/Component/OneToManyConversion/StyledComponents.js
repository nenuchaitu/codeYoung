import styled from "styled-components";

export const OneToManyConversionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const ConversionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 576px) {
    flex-direction: row;
  }
`;

export const Heading = styled.h1`
  font-family: "Bree Serif";
  font-weight: 700;
  font-size: 26px;
  color: #000;
  @media screen and (min-width: 576px) {
    font-size: 32px;
  }
`;

export const FromContainer = styled.div``;
export const ToContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ToItem = styled.div`
  margin-top: 3px;
  margin-bottom: 3px;
  @media screen and (min-width: 576px) {
    margin-left: 10px;
  }
`;
