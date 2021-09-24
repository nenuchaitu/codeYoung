import styled from "styled-components";

export const LoadingViewContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 576px) {
    flex-direction: row;
    justify-content: space-evenly;
  }
`;
