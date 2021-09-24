import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Cookies from "js-cookie";
import {
  LoginFormContainer,
  InputContainer,
  UserInput,
  Form,
  LogInButtonContainer,
  LogInButton,
  FormHeading,
  ReDirectTo,
  AnchorTagsContainer,
  ErrorText,
} from "./StyledComponents";

const jwt = require("jsonwebtoken");

const LoginForm = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [errorMsg, setErrorMsg] = useState();
  const [errorState, setErrorState] = useState(false);
  const authenticateLogin = async (event) => {
    event.preventDefault();
    const userListString = localStorage.getItem("userList");
    const userList = JSON.parse(userListString);
    const matchedUser = userList.filter(
      (userItem) =>
        userName === userItem.userName || userName === userItem.email
    );
    if (matchedUser.length === 0) {
      setErrorMsg("username or email not found ! Please signup");
      setErrorState(true);
    } else {
      const isPasswordMatched = matchedUser[0].password === password;
      if (isPasswordMatched) {
        const payLoad = { userName };
        const jwtToken = jwt.sign(payLoad, "converter", {
          algorithm: "HS256",
          expiresIn: 30,
        });
        Cookies.set("jwt_token", jwtToken, { expires: 365 });
        setErrorState(false);
        const { history } = props;
        history.push("/");
      } else {
        setErrorState(true);
        setErrorMsg("password entered is wrong");
      }
    }
  };
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Redirect to="/" />;
  } else {
    return (
      <LoginFormContainer>
        <FormHeading>Sign In</FormHeading>
        <Form
          onSubmit={(event) => {
            authenticateLogin(event);
          }}
        >
          <InputContainer>
            <FaUserAlt />
            <UserInput
              type="text"
              placeholder="USERNAME OR EMAIL"
              value={userName}
              onChange={(event) => {
                setUserName(event.target.value);
              }}
            />
          </InputContainer>
          <InputContainer>
            <RiLockPasswordFill />
            <UserInput
              type="password"
              placeholder="PASSWORD"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </InputContainer>
          {errorState ? <ErrorText>{errorMsg}</ErrorText> : ""}
          <LogInButtonContainer>
            <LogInButton type="submit">Login</LogInButton>
          </LogInButtonContainer>
          <AnchorTagsContainer>
            <ReDirectTo href="signup">Sign Up</ReDirectTo>
            <ReDirectTo href="forgot-password">Forgot Password</ReDirectTo>
          </AnchorTagsContainer>
        </Form>
      </LoginFormContainer>
    );
  }
};
export default LoginForm;
