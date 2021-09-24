import styled from "styled-components";

export const SignUpFormContainer = styled.div``;
export const FormHeading = styled.h1`
  color: #ffffff;
  text-align: center;
  font-family: "Big Shoulders Text", cursive;
  margin-bottom: 12px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin: 0 auto;
  padding: 10px;
`;
export const InputContainer = styled.div`
  border-bottom: 2px solid #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

export const UserInput = styled.input`
  background-color: transparent;
  width: 250px;
  height: 30px;
  border: none;
  padding: 10px;
  font-size: 16px;
  outline: none;
  ::placeholder {
    color: #ffffff;
    font-size: 14px;
  }
`;
export const SignUpButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 25px;
  height: 80px;
`;
export const SignUpButton = styled.button`
  width: 4em;
  height: 4em;
  background-color: #ffffff;
  border: none;
  border-radius: 30px;
  font-family: "Big Shoulders Text", cursive;
  font-size: 14px;
  font-weight: bold;
  color: #171717;
  cursor: pointer;
  padding: 0.5em;
`;
export const AnchorTagsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  @media screen and (min-width: 576px) {
    margin-top: 45px;
  }
`;
export const ReDirectTo = styled.a`
  text-decoration: none;
  color: #fff;
  margin-bottom: 10px;
  cursor: pointer;
  font-size: 14px;
  text-align: center;
`;
export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
`;
