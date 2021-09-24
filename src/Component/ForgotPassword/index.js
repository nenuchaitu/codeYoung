import { useState } from "react";
import { HiArrowCircleRight, HiSave } from "react-icons/hi";
import {
  InputContainer,
  UserInput,
  Heading,
  ForgotPasswordContainer,
  NextButton,
  ErrorText,
  SignInButton,
  SignInButtonContainer,
} from "./StyledComponents";

const userListString = localStorage.getItem("userList");
const userList = JSON.parse(userListString);

const ForgotPassword = (props) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [errorState, setErrorState] = useState(false);
  const [proceedNext, setProceedNext] = useState(false);

  const passWordValid = () => {
    const passwordModel = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passwordModel)) {
      return true;
    } else {
      return false;
    }
  };

  const onClickProceedNext = () => {
    const matchedUser = userList.filter(
      (userItem) =>
        username === userItem.userName || username === userItem.email
    );
    if (matchedUser.length === 0) {
      setErrorMsg("check username or email entered");
      setErrorState(true);
    } else {
      setErrorState(false);
      setProceedNext(true);
    }
  };

  const checkAndSavePassword = () => {
    if (passWordValid()) {
      if (password === passwordMatch) {
        setErrorState(false);
        const matchedUser = userList.filter(
          (userItem) =>
            username === userItem.userName || username === userItem.email
        );
        const newDetails = {
          userName: matchedUser[0].userName,
          email: matchedUser[0].email,
          password,
        };
        const newUserList = userList.map((user) => {
          if (user.userName === matchedUser[0].userName) {
            return newDetails;
          }
          return user;
        });

        localStorage.setItem("userList", JSON.stringify(newUserList));
        const { history } = props;
        history.push("/login");
      } else {
        setErrorMsg("Password did not match");
        setErrorState(true);
      }
    } else {
      const msg =
        "Invalid Password!*Length should be between 6 to 20 and contain small,upper and digit each";
      setErrorMsg(msg);
      setErrorState(true);
    }
  };

  const usernameView = () => (
    <>
      <Heading>Enter username or email</Heading>
      <InputContainer>
        <UserInput
          type="text"
          placeholder="USERNAME OR EMAIL"
          value={username}
          onChange={(event) => {
            setUsername(event.target.value);
          }}
        />
        <NextButton type="button" onClick={onClickProceedNext}>
          <HiArrowCircleRight size={28} />
        </NextButton>
      </InputContainer>
      {errorState ? <ErrorText>{errorMsg}</ErrorText> : ""}
    </>
  );

  const setNewPasswordView = () => (
    <>
      <Heading>Enter new password</Heading>
      <InputContainer>
        <UserInput
          type="password"
          placeholder="PASSWORD"
          value={password}
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </InputContainer>
      <InputContainer>
        <UserInput
          type="password"
          placeholder="CONFIRM PASSWORD"
          value={passwordMatch}
          onChange={(event) => {
            setPasswordMatch(event.target.value);
          }}
        />
      </InputContainer>
      {errorState ? <ErrorText>{errorMsg}</ErrorText> : ""}
      <SignInButtonContainer>
        <SignInButton type="button" onClick={checkAndSavePassword}>
          <HiSave size={45} />
        </SignInButton>
      </SignInButtonContainer>
    </>
  );
  return (
    <ForgotPasswordContainer>
      {proceedNext ? setNewPasswordView() : usernameView()}
    </ForgotPasswordContainer>
  );
};
export default ForgotPassword;
