import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {
  SignUpFormContainer,
  SignUpButtonContainer,
  InputContainer,
  UserInput,
  Form,
  SignUpButton,
  FormHeading,
  ReDirectTo,
  AnchorTagsContainer,
  ErrorText,
} from "./StyledComponents";

const SignUpForm = (props) => {
  const [userName, setUserName] = useState();
  const [password, setPassword] = useState("");
  const [passwordMatch, setPasswordMatch] = useState();
  const [email, setEmail] = useState();
  const [passwordError, setPasswordError] = useState(false);
  const [passwordMatchError, setPasswordMatchError] = useState(false);
  const [userError, setUserError] = useState(false);

  const validatePassWord = () => {
    const passwordModel = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (password.match(passwordModel)) {
      return false;
    } else {
      return true;
    }
  };

  const newUser = (user) => {
    const userListString = localStorage.getItem("userList");
    const userList = JSON.parse(userListString);
    const matchedUser = userList.filter(
      (userItem) =>
        user.userName === userItem.userName || user.email === userItem.email
    );
    if (matchedUser.length === 0) {
      return true;
    } else {
      return false;
    }
  };

  const redirectToLoginPage = () => {
    const { history } = props;
    history.push("/login");
  };
  const clearInputFields = () => {
    setUserName("");
    setPassword("");
    setEmail("");
    setPasswordMatch("");
  };

  const createUser = async (event) => {
    event.preventDefault();
    setPasswordError(validatePassWord());
    if (!passwordError) {
      if (password === passwordMatch) {
        setPasswordMatchError(false);
        const userListString = localStorage.getItem("userList");
        const user = {
          userName,
          email,
          password,
        };
        if (userListString === null) {
          localStorage.setItem("userList", JSON.stringify([user]));
          clearInputFields();
          redirectToLoginPage();
        } else {
          let userList = JSON.parse(userListString);
          if (newUser(user)) {
            setUserError(false);
            userList.push(user);
            localStorage.setItem("userList", JSON.stringify(userList));
            clearInputFields();
            redirectToLoginPage();
          } else {
            setUserError(true);
          }
        }
      } else {
        setPasswordMatchError(true);
      }
    }
  };
  return (
    <SignUpFormContainer>
      <FormHeading>Sign Up</FormHeading>
      <Form
        onSubmit={(event) => {
          createUser(event);
        }}
      >
        {userError ? (
          <ErrorText>*Username or email already exists</ErrorText>
        ) : (
          ""
        )}
        <InputContainer>
          <FaUserAlt />
          <UserInput
            type="text"
            placeholder="USERNAME"
            value={userName}
            onChange={(event) => {
              setUserName(event.target.value);
            }}
          />
        </InputContainer>
        <InputContainer>
          <MdEmail />
          <UserInput
            type="text"
            placeholder="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
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
        <InputContainer>
          <RiLockPasswordFill />
          <UserInput
            type="password"
            placeholder="CONFIRM PASSWORD"
            value={passwordMatch}
            onChange={(event) => {
              setPasswordMatch(event.target.value);
            }}
          />
        </InputContainer>
        {passwordError ? (
          <ErrorText>
            Invalid Password!*Length should be between 6 to 20 and contain
            small,upper and digit each
          </ErrorText>
        ) : (
          ""
        )}
        {passwordMatchError ? (
          <ErrorText>*Password didn't match</ErrorText>
        ) : (
          ""
        )}
        <SignUpButtonContainer>
          <SignUpButton type="submit">SignUp</SignUpButton>
        </SignUpButtonContainer>
        <AnchorTagsContainer>
          <ReDirectTo href="login">Sign In</ReDirectTo>
        </AnchorTagsContainer>
      </Form>
    </SignUpFormContainer>
  );
};

export default SignUpForm;
