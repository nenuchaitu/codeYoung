import styled from "styled-components";

export const ForgotPasswordContainer = styled.div``;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserInput = styled.input`
  background-color: transparent;
  width: 250px;
  height: 20px;
  border: none;
  padding: 10px;
  font-size: 16px;
  border: 2px solid #000;
  background-color: #fff;
  outline: none;
  ::placeholder {
    color: grey;
    font-size: 14px;
  }
`;
export const Heading = styled.h1`
  font-size: 18px;
  font-weight: 500px;
  font-family: "Big Shoulders Text", cursive;
  color: #171717;
`;
export const NextButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
export const SignInButtonContainer = styled.div`
  text-align: center;
`;
export const SignInButton = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;
